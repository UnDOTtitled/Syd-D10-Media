// @ts-nocheck

import React, { useState, useContext, useEffect, RefObject } from 'react'
import { StateContext, DispatchContext } from './AppInit'
import { formatDateUrl } from './utils/helpers'
import queryString, { ParsedQuery } from 'query-string'
import { AppState } from './utils/types'

type Props = {
  children: React.ReactNode
  classes: string
  ref: HTMLDivElement,
  contentType: string
}
interface Params {
  sort?: string
  page?: string
  type?: string
  from?: string
  to?: string
}

/**
 * Set search params based on initial url params & app state
 */
const appParams = React.forwardRef<HTMLDivElement, Props>(function SearchParams(
  { children, classes, contentType },
  ref
) {
  // const page = forwardRef(ref)
  const { state, data } = useContext(StateContext)
  const {
    loading,
    searchText,
    selectedIndex,
    activeFilters,
    sort,
    currentPageState,
    taxonomyFilter,
    dateRange,
    freeToEnter,
    isStory,
  } = state
  const { dispatch } = useContext(DispatchContext)
  const { from, to } = dateRange
  const parsed = queryString.parse(window.location.search)

  // Filter results based on URL query params
  function filterBySearchParams(params: Params) {
    const {
      search_word,
      index,
      sort,
      page,
      type,
      from,
      to,
      freeToEnter,
      isStory,
    } = params

    let conditions = params['conditions[]']
      ? params['conditions[]']
      : params['conditions[0]']

    //Setting default index

    if (page) {
      dispatch({ type: AppState.FORCE_PAGE_SELECTION, mode: page })
    }

    if (conditions) {
      if (Array.isArray(conditions)) {
        for (const key in conditions) {
          if (conditions[key]) {
            //Seperate field name from values
            const splitStr1 = conditions[key].split('=')

            //Seperate values
            const splitStr2 = splitStr1[1].split(',')

            for (const value in splitStr2) {
              dispatch({
                type: AppState.UPDATE_FILTERS,
                mode: { term: splitStr2[value], field_name: splitStr1[0] },
                action: false,
                initial: true,
              })
            }
          }
        }
      } else {
        //Seperate field name from values
        const splitStr1 = conditions.split('=')

        //Seperate values
        if(splitStr1[1]) {
          const splitStr2 = splitStr1[1].split(',')

          for (const value in splitStr2) {
            dispatch({
              type: AppState.UPDATE_FILTERS,
              mode: { term: splitStr2[value], field_name: splitStr1[0] },
              action: false,
              initial: true,
            })
          }
        }
      }
    }

    if (from && to) {
      // Convert legible dates back to date object
      dispatch({
        type: AppState.PRESET_DATE_RANGE,
        mode: { from: new Date(from), to: new Date(to) },
      })
    }

    if(params['free-to-enter']) {
      dispatch({type: AppState.FREE_TO_ENTER, mode: freeToEnter})
    } else {
      dispatch({type: AppState.CLEAR_FREE_TO_ENTER, mode: freeToEnter})
    }

    if(params['is-story'] == 'false') {
      dispatch({ type: AppState.IS_STORY, mode: false })
    } else {
      dispatch({ type: AppState.IS_STORY, mode: true })

    }
  }

  // Handler for checking whether results need refiltering on history change
  function handlePopstate(e: PopStateEvent) {
    if (e.state) {
      filterBySearchParams(e.state.searchParams)
    }
  }

  useEffect(() => {
    // If querystring found on URL, set filter state accordingly
    filterBySearchParams(parsed)

    // dispatch({ type: AppState.SET_INITIAL_PARAMS, mode: true })

    // Listen to history changes in browser & check whether results need refiltering
    window.addEventListener('popstate', handlePopstate)
    return () => window.removeEventListener('popstate', handlePopstate)
  }, [])

  useEffect(() => {
    // Free to enter for url
    if ('free-to-enter' in parsed) {
      if (parsed['free-to-enter'] === 'true') {
        dispatch({ type: AppState.FREE_TO_ENTER, mode: true });
      } else {
        dispatch({ type: AppState.CLEAR_FREE_TO_ENTER, mode: false });
      }
    }
  }, [])

  useEffect(() => {
    let conditionText = ''

    // taxo filters 
    if (activeFilters) {
      const params = new URLSearchParams(activeFilters)

      const str = params.toString()
      const splitStr = str.split('&')
      let iterations = splitStr.length

      for (let strPart in splitStr) {
        if (!splitStr[strPart].includes('NaN')) {
          if (strPart.length > 0) {
            conditionText += `conditions[]=${splitStr[strPart]}`
            if (--iterations) {
              conditionText += '&'
            }
          }
        } else {
          conditionText += `conditions[]=`
          if (--iterations) {
            conditionText += '&'
          }
        }
      }
    }

    // date filters
    // Default querystring value
    let queryStringValue = 'see-all'

    const searchParams = {
      from: from ? formatDateUrl(from) : undefined,
      to: to ? formatDateUrl(to) : undefined,
    }

    // Add filter data to URL params
    if (searchParams.to) {
      queryStringValue = `&from=${searchParams.from}&to=${searchParams.to}`
    } else if (searchParams.from && searchParams.to == undefined) {
      queryStringValue = `&single-date=${searchParams.from}`
    }

    // Free to enter for url
    let freeToEnterStringValue = ``
    if (contentType == 'event_content') {
      if (freeToEnter == true) {
        freeToEnterStringValue = `&free-to-enter=true`
      } else {
        freeToEnterStringValue = `&free-to-enter=false`
      }
    }

    // Is story for url
    let isStoryStringValue = ``
    if (contentType == 'stories_press_content') {
      if (isStory == true) {
        isStoryStringValue = `&is-story=true`
      } else {
        isStoryStringValue = `&is-story=false`
      }
    }
    window.history.pushState(   
    { searchParams },
      'Filter results',
      `?${conditionText}${queryStringValue}${freeToEnterStringValue}${isStoryStringValue}`
    )
  }, [selectedIndex, activeFilters,  currentPageState, to, freeToEnter, isStory])

  return (
    <section ref={ref} className={classes}>
      {children}
    </section>
  )
})

export default appParams
