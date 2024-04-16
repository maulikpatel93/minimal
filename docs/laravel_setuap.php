https://laravel.com/docs/8.x/controllers
Npm latest version <command>
    # Using Ubuntu
    curl -fsSL https://deb.nodesource.com/setup_current.x | sudo -E bash -
    sudo apt-get install -y nodejs

    # Using Debian, as root
    curl -fsSL https://deb.nodesource.com/setup_current.x | bash -
    apt-get install -y nodejs

    ====================================================

    sudo chmod 777 -R laravel-backend-frontend

    Laravel Project setuap

    1. composer create-project laravel/laravel example-app
    2. cd example-app
    3. php artisan ui bootstrap --auth
    4. npm install
    5. export NODE_OPTIONS=--openssl-legacy-provider
    6. node run dev
    7. php artisan serve
    8. php artisan migrate
    9. composer require doctrine/dbal
    10. php artisan migrate:status

    git config --global user.email "maulikpatel240@gmail.com"
    git config --global user.name "maulikpatel240"

    composer config -g github-oauth.github.com token

    npm upgrade package.json : npx npm-check-updates -u
    npm install
    or
    npm install --legacy-peer-deps

    npx npm-check-updates -u


    cache:clearCommand
    php artisan cache:clear
    php artisan route:cache
    php artisan config:cache
    php artisan view:clear
    php artisan optimize:clear

    Server install commnad
    composer install --ignore-platform-req=php --ignore-platform-req=ext-zip
    composer update --ignore-platform-req=ext-zip

    SELECT * FROM `fo_banknifty_5` where `call_ha_candle_color` is not null ORDER BY `fo_banknifty_5`.`local_datetime_at` DESC;

    postman api table create
    http://localhost:8000/api/v1/test/createtable
    http://localhost:8000/api/v1/test/createtime


    Create Migrate table
    php artisan make:migration create_live_price_hdfcbank_table
    php artisan make:migration create_live_price_icicibank_table
    php artisan make:migration create_live_price_kotakbank_table
    php artisan make:migration create_live_price_reliance_table
    php artisan make:migration create_live_price_adanient_table
    php artisan make:migration create_live_price_adaniports_table
    php artisan make:migration create_live_price_tcs_table
    php artisan make:migration create_live_price_infy_table
    php artisan make:migration create_stock_market_holiday_table
    php artisan make:migration create_neo_fo_table
    php artisan make:migration create_neo_config_table
    php artisan make:migration create_neo_fo_expiry_table
    php artisan make:migration create_fo_banknifty_table
    php artisan make:migration create_fo_signal_table
    php artisan make:migration create_fo_price_adaniports_1_table
    php artisan make:migration create_fo_banknifty_call_1_table
    php artisan make:migration create_order_common_menu_table
    php artisan make:migration create_fo_5_table
    php artisan make:migration create_eq_5_table
    Remove migrate
    php artisan migrate:rollback

    Create Seeder table
    php artisan make:seeder RoleSeeder New seeder FileCreate
    php artisan db:seed databaseseeder file call
    php artisan db:seed --class=RoleTableSeeder
    php artisan db:seed --class=ModulesTableSeeder
    php artisan db:seed --class=PermissionTableSeeder
    php artisan db:seed --class=RoleAccessTableSeeder
    php artisan db:seed --class=AdminTableSeeder
    php artisan db:seed --class=SettingsTableSeeder
    php artisan db:seed --class=ProductTableSeeder
    php artisan db:seed --class=SerialNumberTableSeeder
    php artisan db:seed --class=OrderTableSeeder

    DB import in class
    use Illuminate\Support\Facades\DB;

    cretae import class name
    php artisan make:import StateImport --model=State

    "overlayscrollbars": "^1.13.3",

    Creating indexs db in key
    primary
    unique
    index
    spatialindex

    Any update bs4 to bs5 node js run command
    npx mix

    Create laravel controller command
    php artisan make:controller PhotoController --resource --model=Photo

    Create laravel model command
    php artisan make:model Flight

    Create laravel request command
    php artisan make:request StorePostRequest

    Create laravel controller component
    php artisan make:component Message


    //Salon history
    php artisan make:migration create_saloon_companies_table --path=/database/migrations/salon_modify
    php artisan make:migration create_saloon_services_table --path=/database/migrations/salon_modify
    php artisan make:migration create_saloon_staff_services_table --path=/database/migrations/salon_modify

    //Product manage
    php artisan make:migration create_categories_table --path=/database/migrations/products_modify
    php artisan make:migration create_products_table --path=/database/migrations/products_modify

    //User Modify
    php artisan make:migration create_users_table
    php artisan make:migration create_users_table
    php artisan make:migration create_sms_table
    php artisan make:migration create_salon_subscription_plan_table
    php artisan make:migration create_smtp_table
    php artisan make:migration create_when_to_send_table
    php artisan make:migration create_birthday_drip_campaign_table
    php artisan make:migration create_appointment_campaign_table
    php artisan make:migration create_review_campaign_table
    php artisan make:migration create_sms_character_table
    php artisan make:migration create_neo_orders_table
    php artisan make:migration create_neo_fo_trade_table

    //Common table
    php artisan make:migration create_config_table --path=/database/migrations/common
    php artisan make:migration create_email_templates_table --path=/database/migrations/common
    php artisan make:migration create_templatefield_table --path=/database/migrations/common



    Migrate directory table
    php artisan migrate --path=/path/to/your/migration/directory


    Cache clear coomand
    php artisan cache:clear


    Create Middleware
    php artisan make:middleware EnsureTokenIsValid

    Create Middleware Error pages
    php artisan vendor:publish --tag=laravel-errors

    1.php artisan make:migration create_users_table
    2.php artisan make:migration create_categories_add_column_table --table=categories
    3.php artisan make:migration create_categories_remove_column_table --table=categories
    4.php artisan make:migration create_categories_add_foreign_key_table --table=categories
    5.php artisan make:migration create_categories_remove_foreign_key_table --table=categories
    5.php artisan make:migration create_categories_remove_foreign_key_table --table=categories



    Laravel 8 Multi Authentication – Role Based Login Tutorial
    https://onlinewebtutorblog.com/laravel-8-multi-authentication-role-based-login-tutorial/

    php artisan grid_view:publish --only=views
    php artisan grid_view:publish --only=lang


    Any change mix file scss
    1. export NODE_OPTIONS=--openssl-legacy-provider
    2. node run dev

    Live mix changes command npm run watch


    npm install anchor-js
    npm install is_js
    npm install overlayscrollbars


    Admin panel generated packages
    Install gridview and detail view library

    https://github.com/itstructure/laravel-detail-view
    https://github.com/itstructure/laravel-grid-view

    Multiple form clonData library
    https://www.jqueryscript.net/demo/clone-field-increment-id/

    Storage folder pass
    php artisan storage:link



    /app/Http/Controllers/Api/v1/WebhookApiController.php

    "Itstructure\\GridView\\": "composer/itstructure/laravel-grid-view/src/"

    'name' => 'required',
    'panel' => 'required',



    SET @num := 0;

    UPDATE your_table SET id = @num := (@num+1);

    ALTER TABLE your_table AUTO_INCREMENT =1;


    $2y$10$fiSy6uAKiA4I.r42gmggIOvJ7ebvnHaTDItkeWG8lnch6rEl1uXmO 8894
    Server Side databse export to seed file command


    php artisan iseed role
    php artisan iseed modules
    php artisan iseed permission
    php artisan iseed role_access
    php artisan iseed admin

    php artisan iseed salons
    php artisan iseed salon_modules
    php artisan iseed salon_permissions
    php artisan iseed salon_access
    php artisan iseed nofify_detail
    php artisan iseed price_tier
    php artisan iseed users
    php artisan iseed tax
    php artisan iseed form_element_type


    php artisan iseed closeddate

    php artisan iseed academy
    php artisan iseed sub_academy
    php artisan iseed everyday_marketing
    php artisan iseed sub_everyday_marketing
    php artisan iseed plan

    php artisan iseed categories
    php artisan iseed services
    php artisan iseed services_price
    php artisan iseed staff_services
    php artisan iseed staff_working_hours

    php artisan iseed package_feature
    php artisan iseed package_type
    php artisan iseed package_manage
    php artisan iseed package_feature_access

    sudo kill $(sudo lsof -t -i:8005)

    Server file buid in laravel

    1.Create .env file
    2.php artisan migrate
    3.php artisan db:seed (Data insert in datatable)
    2.Api use command - php artisan passport:install


    Api Postman Link : https://www.getpostman.com/collections/c8b0aad452459c69db8f
    Figma Link 1: https://www.figma.com/file/0wC0gbLEfIOgBSjCrbSIdo/Vande-Mission-App---Maulik?node-id=0%3A1
    Figma lInk 2: https://www.figma.com/file/xmtKXtFChTySeBfTp4Yarp/VandeMission-Me?node-id=0%3A1


    =========Searchble Trait create===================
    https://echebaby.com/blog/2021-02-13-searchable-trait-to-search-in-multiple-columns-with-laravel/

    for stripe local webhook  :
    stripe listen --forward-to http://192.168.1.6:8001/api/v1/webhook/stripewebhookstest


    ==========================Create Traits class ===============
    https://blog.lloydmiller.dev/making-traits-in-laravel-with-custom-console-commands
    php artisan make:command MakeTrait : This will create a file in app/Console/Commands/.
    Create a new Stubs/trait.stub file and make it look like this
    php artisan stub:publish

    You'll need to make a few changes to your new MakeTrait command file. Instead of extending Command, you'll be extending GeneratorCommand. Also, you'll want to delete the __construct() and handle() methods since you're not going to need them.
    <?php
    //namespace App\Console\Commands;
    use Illuminate\Console\GeneratorCommand;

    class MakeTrait extends GeneratorCommand
    {
        /**
         * The name and signature of the console command.
         *
         * @var string
         */
        protected $signature = 'make:trait {name}';

        /**
         * The console command description.
         *
         * @var string
         */
        protected $description = 'Create a new Trait.';

        protected $type = 'Trait';

        protected function getStub()
        {
            return base_path('stubs/trait.stub');
        }

        protected function getDefaultNamespace($rootNamespace)
        {
            return $rootNamespace . '\Traits';
        }

        protected function replaceClass($stub, $name)
        {
            $class = str_replace($this->getNamespace($name) . '\\', '', $name);

            return str_replace('{{trait_name}}', $class, $stub);
        }
    }
    ?>
    app/Traits- command custom created
    php artisan make:trait FooBarTrait

    Please add php extention
    php_gmp.dll
    php_mbstring.dll
    php_imap.dll
    extension=php_gmp.so to php.ini

    ubuntu php.ini file extention remove command
    sudo rm /opt/lampp/lib/php/extensions/no-debug-non-zts-20210902/gmp.so
    sudo rm /opt/sp/phpX.Y/lib/php/extensions/no-debug-non-zts-*/EXTENSION.so

    ==========================================
    composer.json optimization
    "scripts": {
    "post-autoload-dump": [
    "Illuminate\\Foundation\\ComposerScripts::postAutoloadDump",
    "@php artisan package:discover --ansi",
    "@php artisan grid_view:publish",
    "@php artisan detail_view:publish",
    "@php artisan detail_view:publish"
    ],
    "post-update-cmd": [
    "@php artisan vendor:publish --tag=laravel-assets --ansi --force",
    "cp -R composer/itstructure ./vendor",
    "cp -R composer/proengsoft ./vendor"
    ],
    "post-root-package-install": [
    "@php -r \"file_exists('.env') || copy('.env.example', '.env');\""
    ],
    "post-create-project-cmd": [
    "@php artisan key:generate --ansi"
    ]
    },

    ===================================
    …or create a new repository on the command line

    echo "# beauti" >> README.md
    git init
    git add README.md
    git commit -m "first commit"
    git branch -M main
    git remote add origin https://github.com/maulikpatel93/beauti.git
    git push -u origin main
    ======================================
    …or push an existing repository from the command line

    git remote add origin https://github.com/maulikpatel93/beauti.git
    git branch -M main
    git push -u origin main

    <!-- ///////////////// -->
    cron set in laravel
    crontab -e file open and sve below code
    * * * * * cd /var/www/html/simdirect && php artisan schedule:run >> /dev/null 2>&1

    Cronjob email command laravel
    https://www.section.io/engineering-education/laravel-cron-jobs/
    https://masteringbackend.com/posts/laravel-cron-the-definitive-guide

    php artisan schedule:list
    php artisan schedule:run

    //mpdf/mpdf
    composer require mpdf/mpdf -w


    import CryptoJS from 'crypto-js';

    let payload = "your_string_to_decrypt"
    let key = "your_laravel_app_key"

    let encryptStr = CryptoJS.enc.Base64.parse(payload);
    let encryptData = encryptStr.toString(CryptoJS.enc.Utf8);
    encryptData = JSON.parse(encryptData);
    let iv = CryptoJS.enc.Base64.parse(encryptData.iv);
    var decrypted = CryptoJS.AES.decrypt(encryptData.value, CryptoJS.enc.Base64.parse(key), {
    iv : iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
    });
    decrypted = CryptoJS.enc.Utf8.stringify(decrypted);

    console.log(decrypted)


    php artisan serve --host=192.168.1.33 --port=8001


    curl https://api.stripe.com/v1/checkout/sessions/{{CHECKOUT_SESSION_ID}}/line_items \
  -u :


  stripe listen --forward-to http://192.168.1.7:8001/api/v1/webhook/stripewebhooks



    Listen to Stripe events
Add an endpoint
Test in a local environment
Use Stripe CLI to simulate Stripe events in your local environment or learn more about Webhooks.
1
incomplete step 1
Download the CLI and log in with your Stripe account
stripe login
Completed
Logged in on dd-107
2
incomplete step 2
Forward events to your webhook
stripe listen --forward-to localhost:4242/webhook.php
3
incomplete step 3
Trigger events with the CLI
stripe trigger payment_intent.succeeded
stripe trigger subscription_schedule.canceled
stripe trigger invoice.upcoming
stripe trigger charge.captured
stripe trigger invoice.payment_succeeded

See all supported events: stripe trigger --help


subscription autopayment deduction table entry
1. sale
2. cart
3. subscription_services_manage
4. payment

{
  "id": "evt_1MXOqdSFsrov7HTSCgW6GIQR",
  "object": "event",
  "api_version": "2020-08-27",
  "created": 1675429115,
  "data": {
    "object": {
      "id": "in_1MXOqZSFsrov7HTSNpICkePg",
      "object": "invoice",
      "account_country": "IN",
      "account_name": "beauty",
      "account_tax_ids": null,
      "amount_due": 47900,
      "amount_paid": 47900,
      "amount_remaining": 0,
      "amount_shipping": 0,
      "application": null,
      "application_fee_amount": null,
      "attempt_count": 1,
      "attempted": true,
      "auto_advance": false,
      "automatic_tax": {
        "enabled": false,
        "status": null
      },
      "billing_reason": "subscription_create",
      "charge": "ch_3MXOqZSFsrov7HTS06fz7xT5",
      "collection_method": "charge_automatically",
      "created": 1675429111,
      "currency": "aud",
      "custom_fields": null,
      "customer": "cus_NHyom6JQWx8d1C",
      "customer_address": {
        "city": "San Francisco",
        "country": "AU",
        "line1": "510 Townsend St",
        "line2": null,
        "postal_code": "98140",
        "state": "ct"
      },
      "customer_email": null,
      "customer_name": "developer site test",
      "customer_phone": "2544856999",
      "customer_shipping": null,
      "customer_tax_exempt": "none",
      "customer_tax_ids": [
      ],
      "default_payment_method": null,
      "default_source": null,
      "default_tax_rates": [
      ],
      "description": null,
      "discount": null,
      "discounts": [
      ],
      "due_date": null,
      "ending_balance": 0,
      "footer": null,
      "from_invoice": null,
      "hosted_invoice_url": "https://invoice.stripe.com/i/acct_1Ko2rOSFsrov7HTS/test_YWNjdF8xS28yck9TRnNyb3Y3SFRTLF9OSHlvWlJCN3F4eEszVWhpVkFydXhxU3ZqUTRxQ2Y4LDY1OTY5OTE10200LbHnXKWE?s=ap",
      "invoice_pdf": "https://pay.stripe.com/invoice/acct_1Ko2rOSFsrov7HTS/test_YWNjdF8xS28yck9TRnNyb3Y3SFRTLF9OSHlvWlJCN3F4eEszVWhpVkFydXhxU3ZqUTRxQ2Y4LDY1OTY5OTE10200LbHnXKWE/pdf?s=ap",
      "last_finalization_error": null,
      "latest_revision": null,
      "lines": {
        "object": "list",
        "data": [
          {
            "id": "il_1MXOqZSFsrov7HTSy5LZLOM6",
            "object": "line_item",
            "amount": 47900,
            "amount_excluding_tax": 47900,
            "currency": "aud",
            "description": "1 × Accelerate (at $479.00 / month)",
            "discount_amounts": [
            ],
            "discountable": true,
            "discounts": [
            ],
            "livemode": false,
            "metadata": {
            },
            "period": {
              "end": 1677848311,
              "start": 1675429111
            },
            "plan": {
              "id": "price_1MUOIoSFsrov7HTSnrDj2O5s",
              "object": "plan",
              "active": true,
              "aggregate_usage": null,
              "amount": 47900,
              "amount_decimal": "47900",
              "billing_scheme": "per_unit",
              "created": 1674712034,
              "currency": "aud",
              "interval": "month",
              "interval_count": 1,
              "livemode": false,
              "metadata": {
                "type": "Month",
                "currency": "AUD",
                "package_manage_id": "12",
                "package_type_id": "1",
                "total_sms_per_salon": "3800",
                "is_unlimited": "1"
              },
              "nickname": "11+ staff",
              "product": "prod_NEs2wgXTiJhe86",
              "tiers_mode": null,
              "transform_usage": null,
              "trial_period_days": 14,
              "usage_type": "licensed"
            },
            "price": {
              "id": "price_1MUOIoSFsrov7HTSnrDj2O5s",
              "object": "price",
              "active": true,
              "billing_scheme": "per_unit",
              "created": 1674712034,
              "currency": "aud",
              "custom_unit_amount": null,
              "livemode": false,
              "lookup_key": null,
              "metadata": {
                "type": "Month",
                "currency": "AUD",
                "package_manage_id": "12",
                "package_type_id": "1",
                "total_sms_per_salon": "3800",
                "is_unlimited": "1"
              },
              "nickname": "11+ staff",
              "product": "prod_NEs2wgXTiJhe86",
              "recurring": {
                "aggregate_usage": null,
                "interval": "month",
                "interval_count": 1,
                "trial_period_days": 14,
                "usage_type": "licensed"
              },
              "tax_behavior": "unspecified",
              "tiers_mode": null,
              "transform_quantity": null,
              "type": "recurring",
              "unit_amount": 47900,
              "unit_amount_decimal": "47900"
            },
            "proration": false,
            "proration_details": {
              "credited_items": null
            },
            "quantity": 1,
            "subscription": "sub_1MXOqZSFsrov7HTSMhRvORMn",
            "subscription_item": "si_NHyoE4O59tRAJL",
            "tax_amounts": [
            ],
            "tax_rates": [
            ],
            "type": "subscription",
            "unit_amount_excluding_tax": "47900"
          }
        ],
        "has_more": false,
        "total_count": 1,
        "url": "/v1/invoices/in_1MXOqZSFsrov7HTSNpICkePg/lines"
      },
      "livemode": false,
      "metadata": {
      },
      "next_payment_attempt": null,
      "number": "FDAA3E16-0001",
      "on_behalf_of": null,
      "paid": true,
      "paid_out_of_band": false,
      "payment_intent": "pi_3MXOqZSFsrov7HTS0PuHZOJB",
      "payment_settings": {
        "default_mandate": null,
        "payment_method_options": null,
        "payment_method_types": null
      },
      "period_end": 1675429111,
      "period_start": 1675429111,
      "post_payment_credit_notes_amount": 0,
      "pre_payment_credit_notes_amount": 0,
      "quote": null,
      "receipt_number": null,
      "rendering_options": null,
      "shipping_cost": null,
      "shipping_details": null,
      "starting_balance": 0,
      "statement_descriptor": null,
      "status": "paid",
      "status_transitions": {
        "finalized_at": 1675429111,
        "marked_uncollectible_at": null,
        "paid_at": 1675429115,
        "voided_at": null
      },
      "subscription": "sub_1MXOqZSFsrov7HTSMhRvORMn",
      "subtotal": 47900,
      "subtotal_excluding_tax": 47900,
      "tax": null,
      "test_clock": null,
      "total": 47900,
      "total_discount_amounts": [
      ],
      "total_excluding_tax": 47900,
      "total_tax_amounts": [
      ],
      "transfer_data": null,
      "webhooks_delivered_at": null
    }
  },
  "livemode": false,
  "pending_webhooks": 1,
  "request": {
    "id": "req_6CjnICJR7Y5qYx",
    "idempotency_key": "9c456ad9-bc1d-409c-b658-e09cd84d609d"
  },
  "type": "invoice.payment_succeeded"
}



Cron setup steps : https://help.dreamhost.com/hc/en-us/articles/215767047-Creating-a-custom-Cron-Job
       // * * * * * cd /var/www/html/beauty && php artisan schedule:run >> /dev/null 2>&1
        // * * * * * cd /opt/lampp/htdocs/git/beauty && php artisan schedule:run >> /dev/null 2>&1
crontab -e
crontab /home/username/mycrontab

Replace your existing crontab with your custom crontab file

crontab /home/username/filename

Edit your server's crontab

crontab -e

View your crontab

crontab -l

Remove your crontab

crontab -r


* * * * * cd /opt/lampp/htdocs/git/beauty && php artisan schedule:run >> /dev/null 2>&1
* * * * * cd /home/beautisoftware/public_html/beauty && php artisan schedule:run >> /dev/null 2>&1

SQLSTATE[42000]: Syntax error or access violation: 1118 Row size too large (> 8126). Changing some columns to TEXT or BLOB may help. In current row format, BLOB prefix of 0 bytes is stored inline.
error
SET GLOBAL innodb_strict_mode = 0;

DELETE FROM fo_5
WHERE id NOT IN (
    SELECT id
    FROM (
        SELECT MIN(id) AS id
        FROM fo_5
        GROUP BY local_datetime_at
    ) AS t
);


UPDATE security_master
SET sorting =
    CASE
        WHEN symbol = 'HDFCBANK' OR name = 'HDFCBANK' THEN 1
        WHEN symbol = 'RELIANCE' OR name = 'RELIANCE' THEN 2
        WHEN symbol = 'ICICIBANK' OR name = 'ICICIBANK' THEN 3
        WHEN symbol = 'KOTAKBANK' OR name = 'KOTAKBANK' THEN 4
        WHEN symbol = 'AXISBANK' OR name = 'AXISBANK' THEN 5
        WHEN symbol = 'SBIN' OR name = 'SBIN' THEN 6
        WHEN symbol = 'ADANIENT' OR name = 'ADANIENT' THEN 7
        WHEN symbol = 'ADANIPORTS' OR name = 'ADANIPORTS' THEN 8
        WHEN symbol = 'TCS' OR name = 'TCS' THEN 9
        WHEN symbol = 'INFY' OR name = 'INFY' THEN 10
        WHEN symbol = 'SUNPHARMA' OR name = 'SUNPHARMA' THEN 11
        WHEN symbol = 'FINNIFTY' OR name = 'FINNIFTY' THEN 12
        WHEN symbol = 'BANKNIFTY' OR name = 'BANKNIFTY' THEN 13
        WHEN symbol = 'NIFTY' OR name = 'NIFTY' THEN 14
        ELSE sorting
    END;


    npm install d3-array@latest d3-collection@latest d3-force@latest d3-format@latest d3-interpolate@latest d3-path@latest d3-scale@latest d3-selection@latest d3-shape@latest d3-time@latest d3-time-format@latest --save
    node src/pages/server/index.js
    node websocket-server.js

    Restarting the terminal because the connection to the shell process was lost...
    firefox - InvalidStateError: An attempt was made to use an object that is not, or is no longer, usable
    chrome = InvalidStateError: Failed to execute 'send' on 'WebSocket': Still in CONNECTING state.


node:events:515
      throw er; // Unhandled 'error' event
      ^

Error: read ECONNRESET
    at TCP.onStreamRead (node:internal/stream_base_commons:217:20)
Emitted 'error' event on Socket instance at:
    at emitErrorNT (node:internal/streams/destroy:151:8)
    at emitErrorCloseNT (node:internal/streams/destroy:116:3)
    at process.processTicksAndRejections (node:internal/process/task_queues:82:21) {
  errno: -4077,
  code: 'ECONNRESET',
  syscall: 'read'
}

Node.js v18.4.0

TRUNCATE TABLE `trading_mission`.`candle_live_price_banknifty`;
TRUNCATE TABLE `trading_mission`.`candle_live_price_adanient`;
TRUNCATE TABLE `trading_mission`.`candle_live_price_adaniports`;
TRUNCATE TABLE `trading_mission`.`candle_live_price_finnifty`;
TRUNCATE TABLE `trading_mission`.`candle_live_price_hdfcbank`;
TRUNCATE TABLE `trading_mission`.`candle_live_price_icicibank`;
TRUNCATE TABLE `trading_mission`.`candle_live_price_infy`;
TRUNCATE TABLE `trading_mission`.`candle_live_price_kotakbank`;
TRUNCATE TABLE `trading_mission`.`candle_live_price_reliance`;
TRUNCATE TABLE `trading_mission`.`candle_live_price_tcs`;
TRUNCATE TABLE `trading_mission`.`candle_live_price_nifty`;

TRUNCATE TABLE `trading_mission`.`live_price_adanient`;
TRUNCATE TABLE `trading_mission`.`live_price_adaniports`;
TRUNCATE TABLE `trading_mission`.`live_price_banknifty`;
TRUNCATE TABLE `trading_mission`.`live_price_finnifty`;
TRUNCATE TABLE `trading_mission`.`live_price_hdfcbank`;
TRUNCATE TABLE `trading_mission`.`live_price_icicibank`;
TRUNCATE TABLE `trading_mission`.`live_price_infy`;
TRUNCATE TABLE `trading_mission`.`live_price_kotakbank`;
TRUNCATE TABLE `trading_mission`.`live_price_nifty`;
TRUNCATE TABLE `trading_mission`.`live_price_reliance`;
TRUNCATE TABLE `trading_mission`.`live_price_tcs`;


TRUNCATE TABLE `trading_mission`.`equity_adanient_1_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_adanient_2_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_adanient_3_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_adanient_4_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_adanient_5_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_adanient_10_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_adanient_15_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_adanient_20_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_adanient_25_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_adanient_30_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_adanient_35_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_adanient_40_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_adanient_45_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_adanient_50_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_adanient_55_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_adanient_60_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_adanient_75_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_adanient_125_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_adanient_375_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_adaniports_1_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_adaniports_2_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_adaniports_3_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_adaniports_4_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_adaniports_5_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_adaniports_10_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_adaniports_15_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_adaniports_20_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_adaniports_25_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_adaniports_30_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_adaniports_35_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_adaniports_40_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_adaniports_45_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_adaniports_50_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_adaniports_55_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_adaniports_60_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_adaniports_75_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_adaniports_125_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_adaniports_375_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_hdfcbank_1_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_hdfcbank_2_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_hdfcbank_3_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_hdfcbank_4_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_hdfcbank_5_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_hdfcbank_10_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_hdfcbank_15_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_hdfcbank_20_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_hdfcbank_25_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_hdfcbank_30_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_hdfcbank_35_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_hdfcbank_40_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_hdfcbank_45_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_hdfcbank_50_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_hdfcbank_55_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_hdfcbank_60_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_hdfcbank_75_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_hdfcbank_125_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_hdfcbank_375_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_icicibank_1_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_icicibank_2_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_icicibank_3_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_icicibank_4_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_icicibank_5_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_icicibank_10_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_icicibank_15_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_icicibank_20_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_icicibank_25_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_icicibank_30_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_icicibank_35_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_icicibank_40_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_icicibank_45_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_icicibank_50_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_icicibank_55_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_icicibank_60_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_icicibank_75_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_icicibank_125_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_icicibank_375_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_infy_1_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_infy_2_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_infy_3_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_infy_4_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_infy_5_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_infy_10_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_infy_15_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_infy_20_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_infy_25_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_infy_30_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_infy_35_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_infy_40_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_infy_45_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_infy_50_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_infy_55_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_infy_60_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_infy_75_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_infy_125_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_infy_375_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_kotakbank_1_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_kotakbank_2_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_kotakbank_3_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_kotakbank_4_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_kotakbank_5_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_kotakbank_10_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_kotakbank_15_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_kotakbank_20_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_kotakbank_25_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_kotakbank_30_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_kotakbank_35_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_kotakbank_40_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_kotakbank_45_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_kotakbank_50_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_kotakbank_55_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_kotakbank_60_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_kotakbank_75_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_kotakbank_125_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_kotakbank_375_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_reliance_1_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_reliance_2_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_reliance_3_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_reliance_4_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_reliance_5_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_reliance_10_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_reliance_15_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_reliance_20_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_reliance_25_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_reliance_30_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_reliance_35_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_reliance_40_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_reliance_45_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_reliance_50_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_reliance_55_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_reliance_60_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_reliance_75_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_reliance_125_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_reliance_375_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_tcs_1_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_tcs_2_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_tcs_3_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_tcs_4_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_tcs_5_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_tcs_10_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_tcs_15_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_tcs_20_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_tcs_25_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_tcs_30_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_tcs_35_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_tcs_40_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_tcs_45_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_tcs_50_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_tcs_55_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_tcs_60_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_tcs_75_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_tcs_125_minutes`;
TRUNCATE TABLE `trading_mission`.`equity_tcs_375_minutes`;
TRUNCATE TABLE `trading_mission`.`index_banknifty_1_minutes`;
TRUNCATE TABLE `trading_mission`.`index_banknifty_2_minutes`;
TRUNCATE TABLE `trading_mission`.`index_banknifty_3_minutes`;
TRUNCATE TABLE `trading_mission`.`index_banknifty_4_minutes`;
TRUNCATE TABLE `trading_mission`.`index_banknifty_5_minutes`;
TRUNCATE TABLE `trading_mission`.`index_banknifty_10_minutes`;
TRUNCATE TABLE `trading_mission`.`index_banknifty_15_minutes`;
TRUNCATE TABLE `trading_mission`.`index_banknifty_20_minutes`;
TRUNCATE TABLE `trading_mission`.`index_banknifty_25_minutes`;
TRUNCATE TABLE `trading_mission`.`index_banknifty_30_minutes`;
TRUNCATE TABLE `trading_mission`.`index_banknifty_35_minutes`;
TRUNCATE TABLE `trading_mission`.`index_banknifty_40_minutes`;
TRUNCATE TABLE `trading_mission`.`index_banknifty_45_minutes`;
TRUNCATE TABLE `trading_mission`.`index_banknifty_50_minutes`;
TRUNCATE TABLE `trading_mission`.`index_banknifty_55_minutes`;
TRUNCATE TABLE `trading_mission`.`index_banknifty_60_minutes`;
TRUNCATE TABLE `trading_mission`.`index_banknifty_75_minutes`;
TRUNCATE TABLE `trading_mission`.`index_banknifty_125_minutes`;
TRUNCATE TABLE `trading_mission`.`index_banknifty_375_minutes`;
TRUNCATE TABLE `trading_mission`.`index_finnifty_1_minutes`;
TRUNCATE TABLE `trading_mission`.`index_finnifty_2_minutes`;
TRUNCATE TABLE `trading_mission`.`index_finnifty_3_minutes`;
TRUNCATE TABLE `trading_mission`.`index_finnifty_4_minutes`;
TRUNCATE TABLE `trading_mission`.`index_finnifty_5_minutes`;
TRUNCATE TABLE `trading_mission`.`index_finnifty_10_minutes`;
TRUNCATE TABLE `trading_mission`.`index_finnifty_15_minutes`;
TRUNCATE TABLE `trading_mission`.`index_finnifty_20_minutes`;
TRUNCATE TABLE `trading_mission`.`index_finnifty_25_minutes`;
TRUNCATE TABLE `trading_mission`.`index_finnifty_30_minutes`;
TRUNCATE TABLE `trading_mission`.`index_finnifty_35_minutes`;
TRUNCATE TABLE `trading_mission`.`index_finnifty_40_minutes`;
TRUNCATE TABLE `trading_mission`.`index_finnifty_45_minutes`;
TRUNCATE TABLE `trading_mission`.`index_finnifty_50_minutes`;
TRUNCATE TABLE `trading_mission`.`index_finnifty_55_minutes`;
TRUNCATE TABLE `trading_mission`.`index_finnifty_60_minutes`;
TRUNCATE TABLE `trading_mission`.`index_finnifty_75_minutes`;
TRUNCATE TABLE `trading_mission`.`index_finnifty_125_minutes`;
TRUNCATE TABLE `trading_mission`.`index_finnifty_375_minutes`;
TRUNCATE TABLE `trading_mission`.`index_nifty_1_minutes`;
TRUNCATE TABLE `trading_mission`.`index_nifty_2_minutes`;
TRUNCATE TABLE `trading_mission`.`index_nifty_3_minutes`;
TRUNCATE TABLE `trading_mission`.`index_nifty_4_minutes`;
TRUNCATE TABLE `trading_mission`.`index_nifty_5_minutes`;
TRUNCATE TABLE `trading_mission`.`index_nifty_10_minutes`;
TRUNCATE TABLE `trading_mission`.`index_nifty_15_minutes`;
TRUNCATE TABLE `trading_mission`.`index_nifty_20_minutes`;
TRUNCATE TABLE `trading_mission`.`index_nifty_25_minutes`;
TRUNCATE TABLE `trading_mission`.`index_nifty_30_minutes`;
TRUNCATE TABLE `trading_mission`.`index_nifty_35_minutes`;
TRUNCATE TABLE `trading_mission`.`index_nifty_40_minutes`;
TRUNCATE TABLE `trading_mission`.`index_nifty_45_minutes`;
TRUNCATE TABLE `trading_mission`.`index_nifty_50_minutes`;
TRUNCATE TABLE `trading_mission`.`index_nifty_55_minutes`;
TRUNCATE TABLE `trading_mission`.`index_nifty_60_minutes`;
TRUNCATE TABLE `trading_mission`.`index_nifty_75_minutes`;
TRUNCATE TABLE `trading_mission`.`index_nifty_125_minutes`;
TRUNCATE TABLE `trading_mission`.`index_nifty_375_minutes`;


ALTER TABLE `equity_adanient_1_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_adanient_2_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_adanient_3_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_adanient_4_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_adanient_5_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_adanient_10_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_adanient_15_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_adanient_20_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_adanient_25_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_adanient_30_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_adanient_35_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_adanient_40_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_adanient_45_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_adanient_50_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_adanient_55_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_adanient_60_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_adanient_75_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_adanient_125_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_adanient_375_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_adaniports_1_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_adaniports_2_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_adaniports_3_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_adaniports_4_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_adaniports_5_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_adaniports_10_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_adaniports_15_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_adaniports_20_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_adaniports_25_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_adaniports_30_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_adaniports_35_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_adaniports_40_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_adaniports_45_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_adaniports_50_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_adaniports_55_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_adaniports_60_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_adaniports_75_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_adaniports_125_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_adaniports_375_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_hdfcbank_1_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_hdfcbank_2_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_hdfcbank_3_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_hdfcbank_4_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_hdfcbank_5_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_hdfcbank_10_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_hdfcbank_15_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_hdfcbank_20_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_hdfcbank_25_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_hdfcbank_30_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_hdfcbank_35_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_hdfcbank_40_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_hdfcbank_45_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_hdfcbank_50_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_hdfcbank_55_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_hdfcbank_60_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_hdfcbank_75_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_hdfcbank_125_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_hdfcbank_375_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_icicibank_1_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_icicibank_2_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_icicibank_3_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_icicibank_4_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_icicibank_5_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_icicibank_10_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_icicibank_15_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_icicibank_20_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_icicibank_25_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_icicibank_30_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_icicibank_35_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_icicibank_40_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_icicibank_45_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_icicibank_50_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_icicibank_55_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_icicibank_60_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_icicibank_75_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_icicibank_125_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_icicibank_375_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_infy_1_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_infy_2_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_infy_3_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_infy_4_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_infy_5_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_infy_10_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_infy_15_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_infy_20_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_infy_25_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_infy_30_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_infy_35_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_infy_40_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_infy_45_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_infy_50_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_infy_55_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_infy_60_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_infy_75_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_infy_125_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_infy_375_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_kotakbank_1_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_kotakbank_2_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_kotakbank_3_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_kotakbank_4_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_kotakbank_5_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_kotakbank_10_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_kotakbank_15_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_kotakbank_20_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_kotakbank_25_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_kotakbank_30_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_kotakbank_35_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_kotakbank_40_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_kotakbank_45_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_kotakbank_50_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_kotakbank_55_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_kotakbank_60_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_kotakbank_75_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_kotakbank_125_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_kotakbank_375_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_reliance_1_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_reliance_2_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_reliance_3_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_reliance_4_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_reliance_5_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_reliance_10_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_reliance_15_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_reliance_20_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_reliance_25_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_reliance_30_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_reliance_35_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_reliance_40_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_reliance_45_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_reliance_50_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_reliance_55_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_reliance_60_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_reliance_75_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_reliance_125_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_reliance_375_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_tcs_1_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_tcs_2_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_tcs_3_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_tcs_4_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_tcs_5_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_tcs_10_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_tcs_15_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_tcs_20_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_tcs_25_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_tcs_30_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_tcs_35_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_tcs_40_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_tcs_45_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_tcs_50_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_tcs_55_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_tcs_60_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_tcs_75_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_tcs_125_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `equity_tcs_375_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `index_banknifty_1_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `index_banknifty_2_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `index_banknifty_3_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `index_banknifty_4_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `index_banknifty_5_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `index_banknifty_10_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `index_banknifty_15_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `index_banknifty_20_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `index_banknifty_25_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `index_banknifty_30_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `index_banknifty_35_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `index_banknifty_40_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `index_banknifty_45_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `index_banknifty_50_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `index_banknifty_55_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `index_banknifty_60_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `index_banknifty_75_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `index_banknifty_125_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `index_banknifty_375_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `index_finnifty_1_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `index_finnifty_2_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `index_finnifty_3_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `index_finnifty_4_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `index_finnifty_5_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `index_finnifty_10_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `index_finnifty_15_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `index_finnifty_20_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `index_finnifty_25_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `index_finnifty_30_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `index_finnifty_35_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `index_finnifty_40_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `index_finnifty_45_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `index_finnifty_50_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `index_finnifty_55_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `index_finnifty_60_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `index_finnifty_75_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `index_finnifty_125_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `index_finnifty_375_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `index_nifty_1_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `index_nifty_2_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `index_nifty_3_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `index_nifty_4_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `index_nifty_5_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `index_nifty_10_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `index_nifty_15_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `index_nifty_20_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `index_nifty_25_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `index_nifty_30_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `index_nifty_35_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `index_nifty_40_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `index_nifty_45_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `index_nifty_50_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `index_nifty_55_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `index_nifty_60_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `index_nifty_75_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `index_nifty_125_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;
ALTER TABLE `index_nifty_375_minutes` ADD `ha_cp_open` FLOAT(10,2) NULL AFTER `cp_close`, ADD `ha_cp_high` FLOAT(10,2) NULL AFTER `ha_cp_open`, ADD `ha_cp_low` FLOAT(10,2) NULL AFTER `ha_cp_high`, ADD `ha_cp_close` FLOAT(10,2) NULL AFTER `ha_cp_low`;


Unhandled Runtime Error

Error: Invariant failed: A state mutation was detected between dispatches, in the path 'kotakneo.userWS.OPEN'.  This may cause incorrect behavior. (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)

src\pages\backend\kotakneo\auth-guard\WebSocketConnection.js (74:21) @ setNeoSocketConnection

  72 |     console.log('[Socket]: Error !\n');
  73 |     console.log('Dispatching setNeoSocketConnection(false)...');
> 74 |     dispatch(setNeoSocketConnection(false));
     |             ^
  75 |     dispatch(setWebSocket(null));
  76 | };


  Unable to send request !, Reason: Connection faulty or request not valid ! client.js:1:909
    error client.js:1
    error next-dev.js:27
    overrideMethod (index):2367
    send HSWebSocket.js:917
    onopen NeoWebSocketContext.js:42
    onopen HSWebSocket.js:951
    (Async: EventHandlerNonNull)
    startServer HSWebSocket.js:948
    a HSWebSocket.js:834
    initializeWebSocket NeoWebSocketContext.js:32
    NeoWebSocketProvider NeoWebSocketContext.js:98
    React 16
    notify Redux
    batchedUpdates$1 React
    Redux 4
    e (index):1
    actionMiddleware index.js:21
    Redux 2
    dispatch (index):1
    onerror NeoWebSocketContext.js:65
    onerror HSWebSocket.js:975
    (Async: EventHandlerNonNull)
    startServer HSWebSocket.js:972
    a HSWebSocket.js:834
    initializeWebSocket NeoWebSocketContext.js:32
    NeoWebSocketProvider NeoWebSocketContext.js:98
    React 9
Dispatching setNeoSocketConnection(true)... NeoWebSocketContext.js:43:24
GET
wss://lhsm.kotaksecurities.com/
[HTTP/1.1 101 null 97ms]

Closing WebSocket... NeoWebSocketContext.js:103:28
Firefox can’t establish a connection to the server at wss://lhsm.kotaksecurities.com/. _app.js:1004:13
The connection to wss://lhsm.kotaksecurities.com/ was interrupted while the page was loading.



if(liveprice beetween min High and max low){
	insert_new
}else{
	100  110
	let count1
	if(min_high <= liveprice){
		count1 = count1 + 1
		put order sell
		if alredy call buy then ignore call order buy
	}


	100  90
	let count2
	if(max_low >= liveprice){
		count2 = count2 + 1
		call order sell
		if alredy put buy then ignore put order buy
	}

	let count3
	100 90
	if(min High >= liveprice){
		count3 = count3 + 1
		call sell put buy
	}

	let count4
	100 110
	if(max low <= liveprice){
		count3 = count4 + 1
		put sell call buy
	}
}


'{"ai":"ac4c2ddf-0a67-401c-a727-0c15137bf697","bc":"1","cf":"","dd":"NA","dq":"0","es":"nse_fo","mp":"0","mq":"0","nc":"","os":"WEB","pa":"BO:BO||CNC:CNC||CO:CO||NRML:NRML","pc":"NRML","pf":"N","pr":"0","pt":"MKT","ot":"","qt":"15","rt":"DAY","tk":"","tp":"0.0","ts":"BANKNIFTY23SEP44600CE","tt":"S","ur":"","ut":"WEB","cl":"0","od":"","slv":"","sot":"","slt":"","sov":"","lat":"","tlt":"N","tsv":"0"}'


Error: Error: Undefined binding(s) detected when compiling FIRST. Undefined column(s): [pExchSeg, pInstType, pSymbolName, pTrdSymbol, pOptionType, pScripRefKey] query: select * from `neo_fo` where `pExchSeg` = ? and `pInstType` = ? and `pSymbolName` = ? and `pTrdSymbol` = ? and `pOptionType` = ? and `pScripRefKey` = ? and `pSymbol` is not null and `pExchSeg` is not null and `pInstType` is not null and `pSymbolName` is not null and `pTrdSymbol` is not null and `pOptionType` is not null and `pScripRefKey` is not null and `lLotSize` is not null limit ?
[1]     at QueryCompiler_MySQL.toSQL (C:\xampp\htdocs\git\nextbackend\breeze-next\node_modules\knex\lib\query\querycompiler.js:112:13)
[1]     at Builder.toSQL (C:\xampp\htdocs\git\nextbackend\breeze-next\node_modules\knex\lib\query\querybuilder.js:84:44)
[1]     at ensureConnectionCallback (C:\xampp\htdocs\git\nextbackend\breeze-next\node_modules\knex\lib\execution\internal\ensure-connection-callback.js:4:30)
[1]     at Runner.ensureConnection (C:\xampp\htdocs\git\nextbackend\breeze-next\node_modules\knex\lib\execution\runner.js:318:20)
[1]     at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
[1]     at async Runner.run (C:\xampp\htdocs\git\nextbackend\breeze-next\node_modules\knex\lib\execution\runner.js:30:19)


{
  "data": {
    "_id": "044466f277ff1e312fa77bf92188a0dfcf47e42e",
    "lotSize": 15,
    "expiryDate": 1697014800,
    "multiplier": 1,
    "precision": 2,
    "tickSize": 0.05,
    "strikePrice": "43800.00",
    "symbol": "BANKNIFTY",
    "exseg": "nse_fo",
    "exchange": "NSE",
    "exchangeIdentifier": "40068",
    "instType": "OPTIDX",
    "instGroup": "OPT",
    "trdSymbol": "BANKNIFTY23O1143800PE",
    "optType": "PE",
    "assetCode": "26009",
    "active": true,
    "lastUpdated": 1696814399,
    "numerator": 1,
    "denominator": 1,
    "indexExpiryType": "Weekly",
    "readableExpiryDate": "11-OCT-2023",
    "underlyingCompanyName": "Indices",
    "underlyingExchangeSegment": "nse_cm",
    "validFreezeQuantity": 900,
    "openCall": false,
    "closeCall": false,
    "instLabel": "shares",
    "hasFutures": true,
    "isUnderSurveillance": false
  }
}
SELECT DATE_FORMAT(ltt, '%Y-%m-%d %H:%i') AS ltt_formatted, SUM(bq) AS sum_bq, SUM(bs) AS sum_sq FROM live_price_hdfcbank GROUP BY DATE_FORMAT(ltt, '%Y-%m-%d %H:%i');


SELECT
    DATE_FORMAT(ltt, '%Y-%m-%d %H:%i') AS ltt_formatted,
    SUM(bq) AS sum_bq,
    SUM(bs) AS sum_sq,
    (SUM(bq) - SUM(bs)) AS difference
FROM live_price_hdfcbank
GROUP BY DATE_FORMAT(ltt, '%Y-%m-%d %H:%i');

const getcandle = await db(`live_price_${symbol.toLowerCase()}`)
                .select(
                    db.raw("DATE_FORMAT(ltt, '%Y-%m-%d %H:%i') AS ltt_formatted"),
                    db.raw("SUM(bq) AS sum_bq"),
                    db.raw("SUM(bs) AS sum_sq"),
                    // db.raw("(SUM(bq) - SUM(bs)) AS difference"),
                    // db.raw("(SUM(tbq) - SUM(tsq)) AS total_difference"),
                    // db.raw("bq AS sum_bq"),
                    // db.raw("bs AS sum_sq"),
                    // db.raw("(CASE WHEN bq >= bs THEN (bq - bs) ELSE 0 END) AS buyer"),
                    // db.raw("(CASE WHEN bq <= bs THEN (bs - bq) ELSE 0 END) AS seller"),
                    db.raw('(CASE WHEN COALESCE(bq, 0) >= bs THEN (COALESCE(bq, 0) - bs) ELSE 0 END) AS buyer'),
                    db.raw('(CASE WHEN COALESCE(bq, 0) <= bs THEN (bs - COALESCE(bq, 0)) ELSE 0 END) AS seller'),
                    db.raw('(CASE WHEN COALESCE(bq, 0) >= bs THEN (COALESCE(bq, 0) - bs) ELSE 0 END) - (CASE WHEN COALESCE(bq, 0) <= bs THEN (bs - COALESCE(bq, 0)) ELSE 0 END) AS totalbid'),
                    // db.raw("(tbq - tsq) AS total_difference"),
                    // Add all the columns you want to select here
                    'id',
                    'ftm0',
                    'dtm1',
                    'fdtm',
                    'ltt',
                    'v',
                    'ltp',
                    'ltq',
                    'tbq',
                    'tsq',
                    'bp',
                    'sp',
                    'bq',
                    'bs',
                    'ap',
                    'lo',
                    'h',
                    'lcl',
                    'ucl',
                    'yh',
                    'yl',
                    'op',
                    'c',
                    'cng',
                    'nc',
                    'mul',
                    'prec',
                    'name',
                    'tk',
                    'e',
                    'ts',
                    'newGreaterValues',
                    'newLessValues',
                    'greater_value',
                    'lesser_value',
                    'timezone',
                    'loss_limit',
                    'cp_open',
                    'cp_high',
                    'cp_low',
                    'min_cp_high',
                    'max_cp_low',
                    'is_buy_call_signal',
                    'is_sell_call_signal',
                    'is_buy_put_signal',
                    'is_sell_put_signal',
                    'created_at',
                    'updated_at'
                )
                .whereBetween('ltt', [startTimestamp, endTimestamp])
                .orderBy('ltt', 'asc')
                .groupByRaw("DATE_FORMAT(ltt, '%Y-%m-%d %H:%i')");


                SELECT * FROM `fo_banknifty_10` WHERE `local_datetime_at` >= '2023-11-06 10:40:13' and `ltt` is not null ORDER BY local_datetime_at asc;


                SELECT ltt, ltp, AVG(ltp) AS average_ltp FROM fo_banknifty_call WHERE `ltt` BETWEEN '2023-11-10 09:45:00' AND '2023-11-10 14:00:00' GROUP BY DATE(`ltt`), HOUR(`ltt`), MINUTE(`ltt`);


                SELECT
    DATE_FORMAT(`ltt`, '%Y-%m-%d %H:%i') AS interval_start,
    AVG(`ltp`) AS average_ltp
FROM
    fo_banknifty_call
WHERE
    `ltt` BETWEEN '2023-11-10 09:45:00' AND '2023-11-10 14:00:00'
GROUP BY
    interval_start
ORDER BY
    interval_start;

    SELECT
	 ltt,
   ltp,
   max(ltp) as max,
   min(ltp) as min,
   (max(ltp) -  min(ltp)) as diff,
  AVG(ltp) AS average_ltp
FROM
  fo_banknifty_call
WHERE
  `ltt` BETWEEN '2023-11-10 09:45:00' AND '2023-11-10 15:30:00'
GROUP BY
  DATE(`ltt`), HOUR(`ltt`), MINUTE(`ltt`);


  SELECT
    MAX(`ltt`) AS interval_end,
    `ltp`
FROM
    fo_banknifty_call
WHERE
    `ltt` BETWEEN '2023-11-10 09:45:00' AND '2023-11-10 15:31:00'
GROUP BY
    DATE(`ltt`), HOUR(`ltt`), FLOOR(MINUTE(`ltt`) / 5)
ORDER BY
    interval_end DESC;


    SELECT MIN(`ltt`) AS interval_start, MAX(`ltt`) AS interval_end, AVG(`ltp`) FROM fo_banknifty_call WHERE `ltt` BETWEEN '2023-11-10 09:45:00' AND '2023-11-10 15:30:00' GROUP BY DATE(`ltt`), HOUR(`ltt`), FLOOR(MINUTE(`ltt`) / 5) ORDER BY interval_end DESC;


    ===============
    SELECT
    MIN(`ltt`) AS interval_start,
    MAX(`ltt`) AS interval_end,
    MAX(`ltp`) AS max,
    MIN(`ltp`) AS min,
    AVG(`ltp`) AS average_ltp,
    CASE WHEN FIRST(`ltp`) > LAST(`ltp`) THEN 'green' ELSE 'red' END AS color
FROM
    fo_banknifty_call
WHERE
    `ltt` BETWEEN '2023-11-10 09:30:00' AND '2023-11-10 15:30:00'
GROUP BY
    DATE(`ltt`), HOUR(`ltt`), FLOOR(MINUTE(`ltt`) / 5)
ORDER BY
    interval_end DESC;
=============
SELECT
    interval_start,
    interval_end,
    max_ltp,
    min_ltp,
    avg_ltp,
    first_ltp,
    last_ltp
FROM (
    SELECT
        MIN(`ltt`) AS interval_start,
        MAX(`ltt`) AS interval_end,
        MAX(`ltp`) AS max_ltp,
        MIN(`ltp`) AS min_ltp,
        AVG(`ltp`) AS avg_ltp,
        FIRST_VALUE(`ltp`) OVER (PARTITION BY DATE(`ltt`), HOUR(`ltt`), FLOOR(MINUTE(`ltt`) / 5) ORDER BY `ltt`) AS first_ltp,
        LAST_VALUE(`ltp`) OVER (PARTITION BY DATE(`ltt`), HOUR(`ltt`), FLOOR(MINUTE(`ltt`) / 5) ORDER BY `ltt` ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING) AS last_ltp,
        ROW_NUMBER() OVER (PARTITION BY DATE(`ltt`), HOUR(`ltt`), FLOOR(MINUTE(`ltt`) / 5) ORDER BY `ltt`) AS row_num
    FROM
        fo_banknifty_call
    WHERE
        `ltt` BETWEEN '2023-11-10 09:30:00' AND '2023-11-10 15:30:00'
    GROUP BY
        DATE(`ltt`), HOUR(`ltt`), FLOOR(MINUTE(`ltt`) / 5)
) AS subquery
WHERE
    row_num = 1
ORDER BY
    interval_end DESC;

    SELECT id,`created_at`, `optType`,sell_liveprice, liveprice, `sell_liveprice` - `liveprice` AS diff, sum(`sell_liveprice` - `liveprice`) AS total_diff FROM `neo_orders` WHERE `symbol` = "BANKNIFTY" and isInterval = 10 ORDER BY `id` DESC;

    SELECT id,`created_at`,`optType`, sell_liveprice, liveprice, `sell_liveprice` - `liveprice` AS diff, sum(`sell_liveprice` - `liveprice`) AS total_diff FROM `neo_orders` WHERE isInterval = 10 ORDER BY `id` DESC;


    =============================
    ALTER TABLE `fo_banknifty_call` CHANGE `call_order` `buyerOrder` FLOAT(10,2) NOT NULL DEFAULT '0.00', CHANGE `put_order` `sellerOrder` FLOAT(10,2) NOT NULL DEFAULT '0.00';
    ALTER TABLE `fo_banknifty_put` CHANGE `call_order` `buyerOrder` FLOAT(10,2) NOT NULL DEFAULT '0.00', CHANGE `put_order` `sellerOrder` FLOAT(10,2) NOT NULL DEFAULT '0.00';


    ALTER TABLE `fo_nifty_call` CHANGE `call_order` `buyerOrder` FLOAT(10,2) NOT NULL DEFAULT '0.00', CHANGE `put_order` `sellerOrder` FLOAT(10,2) NOT NULL DEFAULT '0.00';
    ALTER TABLE `fo_nifty_put` CHANGE `call_order` `buyerOrder` FLOAT(10,2) NOT NULL DEFAULT '0.00', CHANGE `put_order` `sellerOrder` FLOAT(10,2) NOT NULL DEFAULT '0.00';


    ALTER TABLE `fo_finnifty_call` CHANGE `call_order` `buyerOrder` FLOAT(10,2) NOT NULL DEFAULT '0.00', CHANGE `put_order` `sellerOrder` FLOAT(10,2) NOT NULL DEFAULT '0.00';
    ALTER TABLE `fo_finnifty_put` CHANGE `call_order` `buyerOrder` FLOAT(10,2) NOT NULL DEFAULT '0.00', CHANGE `put_order` `sellerOrder` FLOAT(10,2) NOT NULL DEFAULT '0.00';

    ======================

    SELECT `ltt`, avg(`ltp`) as ltp, avg(`cp`) as ltp, TIMESTAMPDIFF(MINUTE, '2023-11-10 00:00:00', `ltt`) DIV 5 AS interval_number, AVG(`buyerOrder`) AS avg_buyer_order, AVG(`sellerOrder`) AS avg_seller_order, AVG(`sellerOrder`) - AVG(`buyerOrder`) as diff FROM `fo_banknifty_call` GROUP BY interval_number ORDER BY interval_number;
////////////////////
SELECT
`id`,
`local_datetime_at`,
`banknifty_gainer_close_375`,`banknifty_loser_close_375`,
`banknifty_signal_375`,`banknifty_signal_color_375`,
`banknifty_close_375`,
`banknifty_color_375`,
`banknifty_ha_color_375`,
`banknifty_ha_open_375`,
`banknifty_ha_close_375`,
`banknifty_call_open`,`banknifty_call_close`,
`banknifty_put_open`,`banknifty_put_close`,
`finnifty_gainer_close_375`,`finnifty_loser_close_375`,
`finnifty_signal_375`,`finnifty_signal_color_375`,
`finnifty_close_375`,
`finnifty_color_375`,
`finnifty_ha_color_375`,
`finnifty_ha_open_375`,
`finnifty_ha_close_375`,
`nifty_gainer_close_375`,`nifty_loser_close_375`,
`nifty_signal_375`,`nifty_signal_color_375`,
`nifty_close_375`,
`nifty_color_375`,
`nifty_ha_color_375`,
`nifty_ha_open_375`,
`nifty_ha_close_375`

FROM `fo_1` WHERE `ltt` IS NOT NULL AND DATE(`local_datetime_at`) = '2024-04-05' and (`local_datetime_at`) >= '2024-04-05 09:15:00' ORDER BY `local_datetime_at` DESC;



SELECT *
FROM `eq_1` WHERE `ltt` IS NOT NULL AND DATE(`local_datetime_at`) = '2024-04-05' and (`local_datetime_at`) >= '2024-04-05 09:15:00' ORDER BY `local_datetime_at` DESC;
SELECT * FROM `eq_1` WHERE 1

SELECT
`id`,
`local_datetime_at`,

`finnifty_gainer_close_375`,
`finnifty_loser_close_375`,
`finnifty_close_375`,
`finnifty_close_av_375`,

`finnifty_signal_375`,
`finnifty_signal_av_375`,
(LAG(finnifty_signal_av_375) OVER (ORDER BY local_datetime_at)) as t,
CASE
        WHEN finnifty_close_375 > finnifty_close_av_375 THEN 'green'
        ELSE "red"
    END AS signal_color1,
CASE
        WHEN (LAG(finnifty_close_av_375) OVER (ORDER BY local_datetime_at)) >= finnifty_close_av_375  THEN 'red'
        ELSE "green"
    END AS signal_color2,
`finnifty_signal_color_375`,
`finnifty_signal_ha_color_375`,
`finnifty_close`,
`finnifty_call_close`,
`finnifty_put_close`,
`finnifty_green_375`,
`finnifty_red_375`,

`banknifty_gainer_close_375`,
`banknifty_loser_close_375`,
`banknifty_close_375`,
`banknifty_close_av_375`,
`banknifty_signal_375`,
`banknifty_signal_av_375`,
`banknifty_signal_color_375`,
`banknifty_signal_ha_color_375`,
`banknifty_close`,
`banknifty_call_close`,
`banknifty_put_close`,
`banknifty_green_375`,
`banknifty_red_375`,


`nifty_gainer_close_375`,
`nifty_loser_close_375`,
`nifty_close_375`,
`nifty_close_av_375`,
`nifty_signal_375`,
`nifty_signal_av_375`,
`nifty_signal_color_375`,
`nifty_signal_ha_color_375`,
`nifty_close`,
`nifty_call_close`,
`nifty_put_close`,
`nifty_green_375`,
`nifty_red_375`


FROM `fo_5` WHERE `ltt` IS NOT NULL AND DATE(`local_datetime_at`) = '2024-04-09' and (`local_datetime_at`) >= '2024-04-09 09:15:00' ORDER BY `local_datetime_at` DESC;
