for line in $(cat modules.txt)
                do
                    ddev composer require $line -v
            done