<?php

namespace Drupal\listings\Controller;

use Drupal\Core\Controller\ControllerBase;
use Drupal\node\Entity\Node;
use Drupal\datetime\Plugin\Field\FieldType\DateTimeItemInterface;
use Drupal\Core\Datetime\DrupalDateTime;
use Drupal\Core\Render\RenderContext;


/**
 * Returns responses for Syd Search routes.
 */
class SydReactViewController extends ControllerBase {

    //Fetch all content nids of content type

    public static function fetchContentIds($content_type, $fields = [], $dates = [], $free_to_enter = FALSE, $is_story = FALSE) {

        $query = \Drupal::entityQuery('node')
            ->condition('type', $content_type)
            ->condition('status', 1)
            ->accessCheck(TRUE);

        if ($content_type == 'event_content') {

            $query->sort('field_single_date', 'ASC');
            $now = new DrupalDateTime('now');
            $query->condition('field_final_date', $now->format(DateTimeItemInterface::DATETIME_STORAGE_FORMAT), '>=');

            if ($dates) {
                $query->condition('field_multiple_dates', $dates, 'IN');
            }
            if ($free_to_enter) {
                $query->condition('field_free_to_enter', TRUE);
            }
        }

        if ($content_type == 'stories_press_content') {

            $query->sort('field_date', 'DESC');


            if ($is_story) {

                $query->condition('field_type', 'Story', 'IN');

            } else {

                $query->condition('field_type', 'Press Release', 'IN');

            }
        }

        if ($content_type == 'eat_drink_content' || $content_type == 'venues_content') {
            $query->sort('title', 'ASC');
        }

        if ($content_type == 'courses_and_learning_content') {
            $query->sort('field_single_date', 'ASC');
            $now = new DrupalDateTime('now');
            $query->condition('field_final_date', $now->format(DateTimeItemInterface::DATETIME_STORAGE_FORMAT), '>=');

            if ($dates) {
                $query->condition('field_multiple_dates', $dates, 'IN');
            }
        }


        if ($fields) {

            foreach ($fields as $field_name => $field) {

                if ($field) {

                    $query->condition($field_name, $field, 'IN');

                }
            }

        }

        $nids = $query->execute();

        return $nids;

    }

    //Render content based off nid and view mode

    public static function renderContent($nids, $view_mode = 'teaser') {

        $response = [];

        foreach ($nids as $nid) {

            $node = Node::load($nid);
            $view_builder = \Drupal::entityTypeManager()->getViewBuilder('node');
            $pre_render = $view_builder->view($node, $view_mode);
            if ($pre_render) {
                $render_output = \Drupal::service('renderer')->renderPlain($pre_render);
                $response[] = $render_output->__toString();
            }

        }

        return $response;

    }


    public static function buildFilters($filters) {

        if (!$filters) {
            return [];
        }
        $filters_array = [];
        $bundle = $filters['bundle'];

        foreach ($filters['filters'] as $filter) {

            $field_name = $filter['field_name'];

            $connection = \Drupal::database();
            $query = $connection->query("SELECT DISTINCT " . $filter['field_name'] . "_target_id  FROM {node__" . $field_name . "} WHERE bundle = '" . $bundle . "'");
            $ids = $query->fetchCol();

            $entities = \Drupal::entityTypeManager()->getStorage($filter['type'])->loadMultiple($ids);
            $entity_filter = [];


            foreach ($entities as $id => $entity) {

                $entity_filter[] = [
                    'name' => $entity->label(),
                    'id' => $id
                ];

            }

            array_multisort($entity_filter);

            $filters_array[] = [

                'filters' => $entity_filter,
                'name' => $filter['name'],
                'field_name' => $field_name

            ];

        }
        return $filters_array;

    }

}
