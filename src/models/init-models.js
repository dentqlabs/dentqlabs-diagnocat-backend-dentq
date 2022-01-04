var DataTypes = require("sequelize").DataTypes;
var _api-comments = require("./api-comments");
var _api-headers = require("./api-headers");
var _api-routes = require("./api-routes");
var _api-routes-eav = require("./api-routes-eav");
var _api-staff = require("./api-staff");
var _api-staff-allowed = require("./api-staff-allowed");
var _api-staff-routes = require("./api-staff-routes");
var _booking-calendar = require("./booking-calendar");
var _booking-exceptions = require("./booking-exceptions");
var _bookings = require("./bookings");
var _constants_dental_areas = require("./constants_dental_areas");
var _constants_doctor_specialities = require("./constants_doctor_specialities");
var _constants_jaw_scans = require("./constants_jaw_scans");
var _constants_paid_bies = require("./constants_paid_bies");
var _constants_paid_by = require("./constants_paid_by");
var _constants_patient_types = require("./constants_patient_types");
var _constants_report_types = require("./constants_report_types");
var _constants_scan_types = require("./constants_scan_types");
var _customers = require("./customers");
var _data-types = require("./data-types");
var _diagnocat-sessions = require("./diagnocat-sessions");
var _diagnocat_patients = require("./diagnocat_patients");
var _diagnocat_pdf_types = require("./diagnocat_pdf_types");
var _diagnocat_pdfs = require("./diagnocat_pdfs");
var _diagnocat_status = require("./diagnocat_status");
var _doctor-attributes = require("./doctor-attributes");
var _doctor-categories = require("./doctor-categories");
var _doctor-eav = require("./doctor-eav");
var _doctors = require("./doctors");
var _email_templates = require("./email_templates");
var _ip-names = require("./ip-names");
var _ip-visitors = require("./ip-visitors");
var _months = require("./months");
var _mysql_migrations_347ertt3e = require("./mysql_migrations_347ertt3e");
var _patient-attributes = require("./patient-attributes");
var _patient-categories = require("./patient-categories");
var _patient-eav = require("./patient-eav");
var _patients = require("./patients");
var _practice-attributes = require("./practice-attributes");
var _practice-categories = require("./practice-categories");
var _practice-eav = require("./practice-eav");
var _practices = require("./practices");
var _practices-doctors = require("./practices-doctors");
var _products = require("./products");
var _roles_permissions = require("./roles_permissions");
var _roles_to_permissions = require("./roles_to_permissions");
var _settings = require("./settings");
var _support-tickets = require("./support-tickets");
var _tbl_2d2branches = require("./tbl_2d2branches");
var _tbl_2d2branches_old_price = require("./tbl_2d2branches_old_price");
var _tbl_2d2doctors = require("./tbl_2d2doctors");
var _tbl_2d_additional_outputs = require("./tbl_2d_additional_outputs");
var _tbl_2d_outputs2branches = require("./tbl_2d_outputs2branches");
var _tbl_2d_outputs2branches_old_price = require("./tbl_2d_outputs2branches_old_price");
var _tbl_2d_outputs2doctors = require("./tbl_2d_outputs2doctors");
var _tbl_actions_log = require("./tbl_actions_log");
var _tbl_additional_2d_outputs_individual_prices = require("./tbl_additional_2d_outputs_individual_prices");
var _tbl_additional_2d_outputs_prices = require("./tbl_additional_2d_outputs_prices");
var _tbl_additional_2d_outputs_prices_old_price = require("./tbl_additional_2d_outputs_prices_old_price");
var _tbl_additional_holidays = require("./tbl_additional_holidays");
var _tbl_additional_outputs = require("./tbl_additional_outputs");
var _tbl_additional_outputs_individual_prices = require("./tbl_additional_outputs_individual_prices");
var _tbl_additional_outputs_prices = require("./tbl_additional_outputs_prices");
var _tbl_additional_outputs_prices_old_price = require("./tbl_additional_outputs_prices_old_price");
var _tbl_additional_services2branches = require("./tbl_additional_services2branches");
var _tbl_additional_services2branches_old_price = require("./tbl_additional_services2branches_old_price");
var _tbl_additional_services2doctors = require("./tbl_additional_services2doctors");
var _tbl_additional_waiting_lists = require("./tbl_additional_waiting_lists");
var _tbl_app2invoices = require("./tbl_app2invoices");
var _tbl_appointments = require("./tbl_appointments");
var _tbl_appointments_1_11_2020 = require("./tbl_appointments_1_11_2020");
var _tbl_appointments_bkp_24_8_20 = require("./tbl_appointments_bkp_24_8_20");
var _tbl_appointments_copy2doctors = require("./tbl_appointments_copy2doctors");
var _tbl_appointments_notes = require("./tbl_appointments_notes");
var _tbl_appointments_reminders = require("./tbl_appointments_reminders");
var _tbl_appointments_statuses = require("./tbl_appointments_statuses");
var _tbl_appointments_structure = require("./tbl_appointments_structure");
var _tbl_auto_respond_mails = require("./tbl_auto_respond_mails");
var _tbl_bank_statements = require("./tbl_bank_statements");
var _tbl_banking = require("./tbl_banking");
var _tbl_base_upload_types = require("./tbl_base_upload_types");
var _tbl_block_free_history = require("./tbl_block_free_history");
var _tbl_blocked_slots = require("./tbl_blocked_slots");
var _tbl_branch_settings = require("./tbl_branch_settings");
var _tbl_branches = require("./tbl_branches");
var _tbl_card_payments_log = require("./tbl_card_payments_log");
var _tbl_check_list = require("./tbl_check_list");
var _tbl_check_list_log = require("./tbl_check_list_log");
var _tbl_checkin = require("./tbl_checkin");
var _tbl_checkin_bonus_types = require("./tbl_checkin_bonus_types");
var _tbl_checkin_bonuses = require("./tbl_checkin_bonuses");
var _tbl_checkin_bonustypes2users = require("./tbl_checkin_bonustypes2users");
var _tbl_checkin_settings = require("./tbl_checkin_settings");
var _tbl_cheques = require("./tbl_cheques");
var _tbl_confirmed_overtime = require("./tbl_confirmed_overtime");
var _tbl_connected_doctors = require("./tbl_connected_doctors");
var _tbl_countries = require("./tbl_countries");
var _tbl_ctdent_d2d_outputs_pacs_links = require("./tbl_ctdent_d2d_outputs_pacs_links");
var _tbl_ctdent_pacs_links = require("./tbl_ctdent_pacs_links");
var _tbl_ctdent_xelis_planner_links = require("./tbl_ctdent_xelis_planner_links");
var _tbl_days_notes = require("./tbl_days_notes");
var _tbl_dentists_upload = require("./tbl_dentists_upload");
var _tbl_doctors = require("./tbl_doctors");
var _tbl_doctors_agrement_persons = require("./tbl_doctors_agrement_persons");
var _tbl_doctors_duplicates = require("./tbl_doctors_duplicates");
var _tbl_doctors_notes = require("./tbl_doctors_notes");
var _tbl_doctors_old = require("./tbl_doctors_old");
var _tbl_doctors_online_visits = require("./tbl_doctors_online_visits");
var _tbl_doctors_payments_notes = require("./tbl_doctors_payments_notes");
var _tbl_doctors_referrals = require("./tbl_doctors_referrals");
var _tbl_encryption_decryption = require("./tbl_encryption_decryption");
var _tbl_equipments = require("./tbl_equipments");
var _tbl_events = require("./tbl_events");
var _tbl_expense_names = require("./tbl_expense_names");
var _tbl_expenses = require("./tbl_expenses");
var _tbl_expenses_files = require("./tbl_expenses_files");
var _tbl_expenses_groups = require("./tbl_expenses_groups");
var _tbl_expenses_payment_methods = require("./tbl_expenses_payment_methods");
var _tbl_expenses_types = require("./tbl_expenses_types");
var _tbl_extras2branches = require("./tbl_extras2branches");
var _tbl_extras2branches_old_price = require("./tbl_extras2branches_old_price");
var _tbl_extras2branches_order_report = require("./tbl_extras2branches_order_report");
var _tbl_extras2doctors = require("./tbl_extras2doctors");
var _tbl_extras2doctors_old_price = require("./tbl_extras2doctors_old_price");
var _tbl_extras2doctors_old_price_2 = require("./tbl_extras2doctors_old_price_2");
var _tbl_feedback_categories = require("./tbl_feedback_categories");
var _tbl_feedback_questions = require("./tbl_feedback_questions");
var _tbl_feedback_records = require("./tbl_feedback_records");
var _tbl_feedback_score = require("./tbl_feedback_score");
var _tbl_final_demand_email = require("./tbl_final_demand_email");
var _tbl_floatbox_positions = require("./tbl_floatbox_positions");
var _tbl_formats2branches = require("./tbl_formats2branches");
var _tbl_formats2branches_old_price = require("./tbl_formats2branches_old_price");
var _tbl_formats2doctors = require("./tbl_formats2doctors");
var _tbl_formats2doctors_old_price = require("./tbl_formats2doctors_old_price");
var _tbl_heard_about_us_sources = require("./tbl_heard_about_us_sources");
var _tbl_holded_slots = require("./tbl_holded_slots");
var _tbl_holidays = require("./tbl_holidays");
var _tbl_intraoral_blocked_slots = require("./tbl_intraoral_blocked_slots");
var _tbl_invoices = require("./tbl_invoices");
var _tbl_invoices_notes = require("./tbl_invoices_notes");
var _tbl_invoices_reminder = require("./tbl_invoices_reminder");
var _tbl_justifications = require("./tbl_justifications");
var _tbl_lecture_feedback = require("./tbl_lecture_feedback");
var _tbl_lecture_feedback_answers = require("./tbl_lecture_feedback_answers");
var _tbl_lecture_feedback_questions = require("./tbl_lecture_feedback_questions");
var _tbl_lecture_invitations = require("./tbl_lecture_invitations");
var _tbl_lectures = require("./tbl_lectures");
var _tbl_lectures_mail_templates = require("./tbl_lectures_mail_templates");
var _tbl_log = require("./tbl_log");
var _tbl_log_feeder = require("./tbl_log_feeder");
var _tbl_log_types = require("./tbl_log_types");
var _tbl_mails_templates = require("./tbl_mails_templates");
var _tbl_mails_templates_old = require("./tbl_mails_templates_old");
var _tbl_management = require("./tbl_management");
var _tbl_management_feedback = require("./tbl_management_feedback");
var _tbl_manually_activated_doctors = require("./tbl_manually_activated_doctors");
var _tbl_message_requests = require("./tbl_message_requests");
var _tbl_messages = require("./tbl_messages");
var _tbl_messages_feedback = require("./tbl_messages_feedback");
var _tbl_messaging_deleted_threads2users = require("./tbl_messaging_deleted_threads2users");
var _tbl_messaging_messages = require("./tbl_messaging_messages");
var _tbl_messaging_messages2users = require("./tbl_messaging_messages2users");
var _tbl_messaging_threads = require("./tbl_messaging_threads");
var _tbl_messaging_threads2users = require("./tbl_messaging_threads2users");
var _tbl_modules = require("./tbl_modules");
var _tbl_notepad = require("./tbl_notepad");
var _tbl_offers = require("./tbl_offers");
var _tbl_outputs2branches = require("./tbl_outputs2branches");
var _tbl_outputs2branches_old_price = require("./tbl_outputs2branches_old_price");
var _tbl_outputs2doctors = require("./tbl_outputs2doctors");
var _tbl_outputs2doctors_old_price = require("./tbl_outputs2doctors_old_price");
var _tbl_outsource = require("./tbl_outsource");
var _tbl_petty_cash_expenses = require("./tbl_petty_cash_expenses");
var _tbl_phone_cases = require("./tbl_phone_cases");
var _tbl_phonebook = require("./tbl_phonebook");
var _tbl_print_referral_settings = require("./tbl_print_referral_settings");
var _tbl_products = require("./tbl_products");
var _tbl_public_holidays = require("./tbl_public_holidays");
var _tbl_quality_assurance = require("./tbl_quality_assurance");
var _tbl_quality_control = require("./tbl_quality_control");
var _tbl_review_account_reminder = require("./tbl_review_account_reminder");
var _tbl_roles = require("./tbl_roles");
var _tbl_sales_actions = require("./tbl_sales_actions");
var _tbl_sales_db = require("./tbl_sales_db");
var _tbl_sales_diary = require("./tbl_sales_diary");
var _tbl_sales_feedback = require("./tbl_sales_feedback");
var _tbl_sales_feedback_questions = require("./tbl_sales_feedback_questions");
var _tbl_sales_followup = require("./tbl_sales_followup");
var _tbl_sales_made_a_call = require("./tbl_sales_made_a_call");
var _tbl_sales_reminders = require("./tbl_sales_reminders");
var _tbl_sales_statuses = require("./tbl_sales_statuses");
var _tbl_sales_users_settings = require("./tbl_sales_users_settings");
var _tbl_schedule = require("./tbl_schedule");
var _tbl_schedule_history_list = require("./tbl_schedule_history_list");
var _tbl_sent_hard_copy = require("./tbl_sent_hard_copy");
var _tbl_shared_appointments2doctors = require("./tbl_shared_appointments2doctors");
var _tbl_sms = require("./tbl_sms");
var _tbl_sms_templates = require("./tbl_sms_templates");
var _tbl_specail_available_slots = require("./tbl_specail_available_slots");
var _tbl_support_inbox = require("./tbl_support_inbox");
var _tbl_telephone_feedback = require("./tbl_telephone_feedback");
var _tbl_telephone_feedback_answers = require("./tbl_telephone_feedback_answers");
var _tbl_telephone_feedback_questions = require("./tbl_telephone_feedback_questions");
var _tbl_testimonials = require("./tbl_testimonials");
var _tbl_time_log = require("./tbl_time_log");
var _tbl_uncofirmed_doctors = require("./tbl_uncofirmed_doctors");
var _tbl_upload_types_explanations = require("./tbl_upload_types_explanations");
var _tbl_upload_types_extensions = require("./tbl_upload_types_extensions");
var _tbl_uploads = require("./tbl_uploads");
var _tbl_uploads_new = require("./tbl_uploads_new");
var _tbl_urgent_processing = require("./tbl_urgent_processing");
var _tbl_user_expense = require("./tbl_user_expense");
var _tbl_user_session_activity = require("./tbl_user_session_activity");
var _tbl_users = require("./tbl_users");
var _tbl_users_forms_state = require("./tbl_users_forms_state");
var _tbl_users_holiday_days = require("./tbl_users_holiday_days");
var _tbl_users_todo_lists = require("./tbl_users_todo_lists");
var _tbl_walk_in_patients = require("./tbl_walk_in_patients");
var _user_roles = require("./user_roles");
var _users = require("./users");
var _users_to_roles = require("./users_to_roles");
var _weekdays = require("./weekdays");

function initModels(sequelize) {
  var api-comments = _api-comments(sequelize, DataTypes);
  var api-headers = _api-headers(sequelize, DataTypes);
  var api-routes = _api-routes(sequelize, DataTypes);
  var api-routes-eav = _api-routes-eav(sequelize, DataTypes);
  var api-staff = _api-staff(sequelize, DataTypes);
  var api-staff-allowed = _api-staff-allowed(sequelize, DataTypes);
  var api-staff-routes = _api-staff-routes(sequelize, DataTypes);
  var booking-calendar = _booking-calendar(sequelize, DataTypes);
  var booking-exceptions = _booking-exceptions(sequelize, DataTypes);
  var bookings = _bookings(sequelize, DataTypes);
  var constants_dental_areas = _constants_dental_areas(sequelize, DataTypes);
  var constants_doctor_specialities = _constants_doctor_specialities(sequelize, DataTypes);
  var constants_jaw_scans = _constants_jaw_scans(sequelize, DataTypes);
  var constants_paid_bies = _constants_paid_bies(sequelize, DataTypes);
  var constants_paid_by = _constants_paid_by(sequelize, DataTypes);
  var constants_patient_types = _constants_patient_types(sequelize, DataTypes);
  var constants_report_types = _constants_report_types(sequelize, DataTypes);
  var constants_scan_types = _constants_scan_types(sequelize, DataTypes);
  var customers = _customers(sequelize, DataTypes);
  var data-types = _data-types(sequelize, DataTypes);
  var diagnocat-sessions = _diagnocat-sessions(sequelize, DataTypes);
  var diagnocat_patients = _diagnocat_patients(sequelize, DataTypes);
  var diagnocat_pdf_types = _diagnocat_pdf_types(sequelize, DataTypes);
  var diagnocat_pdfs = _diagnocat_pdfs(sequelize, DataTypes);
  var diagnocat_status = _diagnocat_status(sequelize, DataTypes);
  var doctor-attributes = _doctor-attributes(sequelize, DataTypes);
  var doctor-categories = _doctor-categories(sequelize, DataTypes);
  var doctor-eav = _doctor-eav(sequelize, DataTypes);
  var doctors = _doctors(sequelize, DataTypes);
  var email_templates = _email_templates(sequelize, DataTypes);
  var ip-names = _ip-names(sequelize, DataTypes);
  var ip-visitors = _ip-visitors(sequelize, DataTypes);
  var months = _months(sequelize, DataTypes);
  var mysql_migrations_347ertt3e = _mysql_migrations_347ertt3e(sequelize, DataTypes);
  var patient-attributes = _patient-attributes(sequelize, DataTypes);
  var patient-categories = _patient-categories(sequelize, DataTypes);
  var patient-eav = _patient-eav(sequelize, DataTypes);
  var patients = _patients(sequelize, DataTypes);
  var practice-attributes = _practice-attributes(sequelize, DataTypes);
  var practice-categories = _practice-categories(sequelize, DataTypes);
  var practice-eav = _practice-eav(sequelize, DataTypes);
  var practices = _practices(sequelize, DataTypes);
  var practices-doctors = _practices-doctors(sequelize, DataTypes);
  var products = _products(sequelize, DataTypes);
  var roles_permissions = _roles_permissions(sequelize, DataTypes);
  var roles_to_permissions = _roles_to_permissions(sequelize, DataTypes);
  var settings = _settings(sequelize, DataTypes);
  var support-tickets = _support-tickets(sequelize, DataTypes);
  var tbl_2d2branches = _tbl_2d2branches(sequelize, DataTypes);
  var tbl_2d2branches_old_price = _tbl_2d2branches_old_price(sequelize, DataTypes);
  var tbl_2d2doctors = _tbl_2d2doctors(sequelize, DataTypes);
  var tbl_2d_additional_outputs = _tbl_2d_additional_outputs(sequelize, DataTypes);
  var tbl_2d_outputs2branches = _tbl_2d_outputs2branches(sequelize, DataTypes);
  var tbl_2d_outputs2branches_old_price = _tbl_2d_outputs2branches_old_price(sequelize, DataTypes);
  var tbl_2d_outputs2doctors = _tbl_2d_outputs2doctors(sequelize, DataTypes);
  var tbl_actions_log = _tbl_actions_log(sequelize, DataTypes);
  var tbl_additional_2d_outputs_individual_prices = _tbl_additional_2d_outputs_individual_prices(sequelize, DataTypes);
  var tbl_additional_2d_outputs_prices = _tbl_additional_2d_outputs_prices(sequelize, DataTypes);
  var tbl_additional_2d_outputs_prices_old_price = _tbl_additional_2d_outputs_prices_old_price(sequelize, DataTypes);
  var tbl_additional_holidays = _tbl_additional_holidays(sequelize, DataTypes);
  var tbl_additional_outputs = _tbl_additional_outputs(sequelize, DataTypes);
  var tbl_additional_outputs_individual_prices = _tbl_additional_outputs_individual_prices(sequelize, DataTypes);
  var tbl_additional_outputs_prices = _tbl_additional_outputs_prices(sequelize, DataTypes);
  var tbl_additional_outputs_prices_old_price = _tbl_additional_outputs_prices_old_price(sequelize, DataTypes);
  var tbl_additional_services2branches = _tbl_additional_services2branches(sequelize, DataTypes);
  var tbl_additional_services2branches_old_price = _tbl_additional_services2branches_old_price(sequelize, DataTypes);
  var tbl_additional_services2doctors = _tbl_additional_services2doctors(sequelize, DataTypes);
  var tbl_additional_waiting_lists = _tbl_additional_waiting_lists(sequelize, DataTypes);
  var tbl_app2invoices = _tbl_app2invoices(sequelize, DataTypes);
  var tbl_appointments = _tbl_appointments(sequelize, DataTypes);
  var tbl_appointments_1_11_2020 = _tbl_appointments_1_11_2020(sequelize, DataTypes);
  var tbl_appointments_bkp_24_8_20 = _tbl_appointments_bkp_24_8_20(sequelize, DataTypes);
  var tbl_appointments_copy2doctors = _tbl_appointments_copy2doctors(sequelize, DataTypes);
  var tbl_appointments_notes = _tbl_appointments_notes(sequelize, DataTypes);
  var tbl_appointments_reminders = _tbl_appointments_reminders(sequelize, DataTypes);
  var tbl_appointments_statuses = _tbl_appointments_statuses(sequelize, DataTypes);
  var tbl_appointments_structure = _tbl_appointments_structure(sequelize, DataTypes);
  var tbl_auto_respond_mails = _tbl_auto_respond_mails(sequelize, DataTypes);
  var tbl_bank_statements = _tbl_bank_statements(sequelize, DataTypes);
  var tbl_banking = _tbl_banking(sequelize, DataTypes);
  var tbl_base_upload_types = _tbl_base_upload_types(sequelize, DataTypes);
  var tbl_block_free_history = _tbl_block_free_history(sequelize, DataTypes);
  var tbl_blocked_slots = _tbl_blocked_slots(sequelize, DataTypes);
  var tbl_branch_settings = _tbl_branch_settings(sequelize, DataTypes);
  var tbl_branches = _tbl_branches(sequelize, DataTypes);
  var tbl_card_payments_log = _tbl_card_payments_log(sequelize, DataTypes);
  var tbl_check_list = _tbl_check_list(sequelize, DataTypes);
  var tbl_check_list_log = _tbl_check_list_log(sequelize, DataTypes);
  var tbl_checkin = _tbl_checkin(sequelize, DataTypes);
  var tbl_checkin_bonus_types = _tbl_checkin_bonus_types(sequelize, DataTypes);
  var tbl_checkin_bonuses = _tbl_checkin_bonuses(sequelize, DataTypes);
  var tbl_checkin_bonustypes2users = _tbl_checkin_bonustypes2users(sequelize, DataTypes);
  var tbl_checkin_settings = _tbl_checkin_settings(sequelize, DataTypes);
  var tbl_cheques = _tbl_cheques(sequelize, DataTypes);
  var tbl_confirmed_overtime = _tbl_confirmed_overtime(sequelize, DataTypes);
  var tbl_connected_doctors = _tbl_connected_doctors(sequelize, DataTypes);
  var tbl_countries = _tbl_countries(sequelize, DataTypes);
  var tbl_ctdent_d2d_outputs_pacs_links = _tbl_ctdent_d2d_outputs_pacs_links(sequelize, DataTypes);
  var tbl_ctdent_pacs_links = _tbl_ctdent_pacs_links(sequelize, DataTypes);
  var tbl_ctdent_xelis_planner_links = _tbl_ctdent_xelis_planner_links(sequelize, DataTypes);
  var tbl_days_notes = _tbl_days_notes(sequelize, DataTypes);
  var tbl_dentists_upload = _tbl_dentists_upload(sequelize, DataTypes);
  var tbl_doctors = _tbl_doctors(sequelize, DataTypes);
  var tbl_doctors_agrement_persons = _tbl_doctors_agrement_persons(sequelize, DataTypes);
  var tbl_doctors_duplicates = _tbl_doctors_duplicates(sequelize, DataTypes);
  var tbl_doctors_notes = _tbl_doctors_notes(sequelize, DataTypes);
  var tbl_doctors_old = _tbl_doctors_old(sequelize, DataTypes);
  var tbl_doctors_online_visits = _tbl_doctors_online_visits(sequelize, DataTypes);
  var tbl_doctors_payments_notes = _tbl_doctors_payments_notes(sequelize, DataTypes);
  var tbl_doctors_referrals = _tbl_doctors_referrals(sequelize, DataTypes);
  var tbl_encryption_decryption = _tbl_encryption_decryption(sequelize, DataTypes);
  var tbl_equipments = _tbl_equipments(sequelize, DataTypes);
  var tbl_events = _tbl_events(sequelize, DataTypes);
  var tbl_expense_names = _tbl_expense_names(sequelize, DataTypes);
  var tbl_expenses = _tbl_expenses(sequelize, DataTypes);
  var tbl_expenses_files = _tbl_expenses_files(sequelize, DataTypes);
  var tbl_expenses_groups = _tbl_expenses_groups(sequelize, DataTypes);
  var tbl_expenses_payment_methods = _tbl_expenses_payment_methods(sequelize, DataTypes);
  var tbl_expenses_types = _tbl_expenses_types(sequelize, DataTypes);
  var tbl_extras2branches = _tbl_extras2branches(sequelize, DataTypes);
  var tbl_extras2branches_old_price = _tbl_extras2branches_old_price(sequelize, DataTypes);
  var tbl_extras2branches_order_report = _tbl_extras2branches_order_report(sequelize, DataTypes);
  var tbl_extras2doctors = _tbl_extras2doctors(sequelize, DataTypes);
  var tbl_extras2doctors_old_price = _tbl_extras2doctors_old_price(sequelize, DataTypes);
  var tbl_extras2doctors_old_price_2 = _tbl_extras2doctors_old_price_2(sequelize, DataTypes);
  var tbl_feedback_categories = _tbl_feedback_categories(sequelize, DataTypes);
  var tbl_feedback_questions = _tbl_feedback_questions(sequelize, DataTypes);
  var tbl_feedback_records = _tbl_feedback_records(sequelize, DataTypes);
  var tbl_feedback_score = _tbl_feedback_score(sequelize, DataTypes);
  var tbl_final_demand_email = _tbl_final_demand_email(sequelize, DataTypes);
  var tbl_floatbox_positions = _tbl_floatbox_positions(sequelize, DataTypes);
  var tbl_formats2branches = _tbl_formats2branches(sequelize, DataTypes);
  var tbl_formats2branches_old_price = _tbl_formats2branches_old_price(sequelize, DataTypes);
  var tbl_formats2doctors = _tbl_formats2doctors(sequelize, DataTypes);
  var tbl_formats2doctors_old_price = _tbl_formats2doctors_old_price(sequelize, DataTypes);
  var tbl_heard_about_us_sources = _tbl_heard_about_us_sources(sequelize, DataTypes);
  var tbl_holded_slots = _tbl_holded_slots(sequelize, DataTypes);
  var tbl_holidays = _tbl_holidays(sequelize, DataTypes);
  var tbl_intraoral_blocked_slots = _tbl_intraoral_blocked_slots(sequelize, DataTypes);
  var tbl_invoices = _tbl_invoices(sequelize, DataTypes);
  var tbl_invoices_notes = _tbl_invoices_notes(sequelize, DataTypes);
  var tbl_invoices_reminder = _tbl_invoices_reminder(sequelize, DataTypes);
  var tbl_justifications = _tbl_justifications(sequelize, DataTypes);
  var tbl_lecture_feedback = _tbl_lecture_feedback(sequelize, DataTypes);
  var tbl_lecture_feedback_answers = _tbl_lecture_feedback_answers(sequelize, DataTypes);
  var tbl_lecture_feedback_questions = _tbl_lecture_feedback_questions(sequelize, DataTypes);
  var tbl_lecture_invitations = _tbl_lecture_invitations(sequelize, DataTypes);
  var tbl_lectures = _tbl_lectures(sequelize, DataTypes);
  var tbl_lectures_mail_templates = _tbl_lectures_mail_templates(sequelize, DataTypes);
  var tbl_log = _tbl_log(sequelize, DataTypes);
  var tbl_log_feeder = _tbl_log_feeder(sequelize, DataTypes);
  var tbl_log_types = _tbl_log_types(sequelize, DataTypes);
  var tbl_mails_templates = _tbl_mails_templates(sequelize, DataTypes);
  var tbl_mails_templates_old = _tbl_mails_templates_old(sequelize, DataTypes);
  var tbl_management = _tbl_management(sequelize, DataTypes);
  var tbl_management_feedback = _tbl_management_feedback(sequelize, DataTypes);
  var tbl_manually_activated_doctors = _tbl_manually_activated_doctors(sequelize, DataTypes);
  var tbl_message_requests = _tbl_message_requests(sequelize, DataTypes);
  var tbl_messages = _tbl_messages(sequelize, DataTypes);
  var tbl_messages_feedback = _tbl_messages_feedback(sequelize, DataTypes);
  var tbl_messaging_deleted_threads2users = _tbl_messaging_deleted_threads2users(sequelize, DataTypes);
  var tbl_messaging_messages = _tbl_messaging_messages(sequelize, DataTypes);
  var tbl_messaging_messages2users = _tbl_messaging_messages2users(sequelize, DataTypes);
  var tbl_messaging_threads = _tbl_messaging_threads(sequelize, DataTypes);
  var tbl_messaging_threads2users = _tbl_messaging_threads2users(sequelize, DataTypes);
  var tbl_modules = _tbl_modules(sequelize, DataTypes);
  var tbl_notepad = _tbl_notepad(sequelize, DataTypes);
  var tbl_offers = _tbl_offers(sequelize, DataTypes);
  var tbl_outputs2branches = _tbl_outputs2branches(sequelize, DataTypes);
  var tbl_outputs2branches_old_price = _tbl_outputs2branches_old_price(sequelize, DataTypes);
  var tbl_outputs2doctors = _tbl_outputs2doctors(sequelize, DataTypes);
  var tbl_outputs2doctors_old_price = _tbl_outputs2doctors_old_price(sequelize, DataTypes);
  var tbl_outsource = _tbl_outsource(sequelize, DataTypes);
  var tbl_petty_cash_expenses = _tbl_petty_cash_expenses(sequelize, DataTypes);
  var tbl_phone_cases = _tbl_phone_cases(sequelize, DataTypes);
  var tbl_phonebook = _tbl_phonebook(sequelize, DataTypes);
  var tbl_print_referral_settings = _tbl_print_referral_settings(sequelize, DataTypes);
  var tbl_products = _tbl_products(sequelize, DataTypes);
  var tbl_public_holidays = _tbl_public_holidays(sequelize, DataTypes);
  var tbl_quality_assurance = _tbl_quality_assurance(sequelize, DataTypes);
  var tbl_quality_control = _tbl_quality_control(sequelize, DataTypes);
  var tbl_review_account_reminder = _tbl_review_account_reminder(sequelize, DataTypes);
  var tbl_roles = _tbl_roles(sequelize, DataTypes);
  var tbl_sales_actions = _tbl_sales_actions(sequelize, DataTypes);
  var tbl_sales_db = _tbl_sales_db(sequelize, DataTypes);
  var tbl_sales_diary = _tbl_sales_diary(sequelize, DataTypes);
  var tbl_sales_feedback = _tbl_sales_feedback(sequelize, DataTypes);
  var tbl_sales_feedback_questions = _tbl_sales_feedback_questions(sequelize, DataTypes);
  var tbl_sales_followup = _tbl_sales_followup(sequelize, DataTypes);
  var tbl_sales_made_a_call = _tbl_sales_made_a_call(sequelize, DataTypes);
  var tbl_sales_reminders = _tbl_sales_reminders(sequelize, DataTypes);
  var tbl_sales_statuses = _tbl_sales_statuses(sequelize, DataTypes);
  var tbl_sales_users_settings = _tbl_sales_users_settings(sequelize, DataTypes);
  var tbl_schedule = _tbl_schedule(sequelize, DataTypes);
  var tbl_schedule_history_list = _tbl_schedule_history_list(sequelize, DataTypes);
  var tbl_sent_hard_copy = _tbl_sent_hard_copy(sequelize, DataTypes);
  var tbl_shared_appointments2doctors = _tbl_shared_appointments2doctors(sequelize, DataTypes);
  var tbl_sms = _tbl_sms(sequelize, DataTypes);
  var tbl_sms_templates = _tbl_sms_templates(sequelize, DataTypes);
  var tbl_specail_available_slots = _tbl_specail_available_slots(sequelize, DataTypes);
  var tbl_support_inbox = _tbl_support_inbox(sequelize, DataTypes);
  var tbl_telephone_feedback = _tbl_telephone_feedback(sequelize, DataTypes);
  var tbl_telephone_feedback_answers = _tbl_telephone_feedback_answers(sequelize, DataTypes);
  var tbl_telephone_feedback_questions = _tbl_telephone_feedback_questions(sequelize, DataTypes);
  var tbl_testimonials = _tbl_testimonials(sequelize, DataTypes);
  var tbl_time_log = _tbl_time_log(sequelize, DataTypes);
  var tbl_uncofirmed_doctors = _tbl_uncofirmed_doctors(sequelize, DataTypes);
  var tbl_upload_types_explanations = _tbl_upload_types_explanations(sequelize, DataTypes);
  var tbl_upload_types_extensions = _tbl_upload_types_extensions(sequelize, DataTypes);
  var tbl_uploads = _tbl_uploads(sequelize, DataTypes);
  var tbl_uploads_new = _tbl_uploads_new(sequelize, DataTypes);
  var tbl_urgent_processing = _tbl_urgent_processing(sequelize, DataTypes);
  var tbl_user_expense = _tbl_user_expense(sequelize, DataTypes);
  var tbl_user_session_activity = _tbl_user_session_activity(sequelize, DataTypes);
  var tbl_users = _tbl_users(sequelize, DataTypes);
  var tbl_users_forms_state = _tbl_users_forms_state(sequelize, DataTypes);
  var tbl_users_holiday_days = _tbl_users_holiday_days(sequelize, DataTypes);
  var tbl_users_todo_lists = _tbl_users_todo_lists(sequelize, DataTypes);
  var tbl_walk_in_patients = _tbl_walk_in_patients(sequelize, DataTypes);
  var user_roles = _user_roles(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);
  var users_to_roles = _users_to_roles(sequelize, DataTypes);
  var weekdays = _weekdays(sequelize, DataTypes);


  return {
    api-comments,
    api-headers,
    api-routes,
    api-routes-eav,
    api-staff,
    api-staff-allowed,
    api-staff-routes,
    booking-calendar,
    booking-exceptions,
    bookings,
    constants_dental_areas,
    constants_doctor_specialities,
    constants_jaw_scans,
    constants_paid_bies,
    constants_paid_by,
    constants_patient_types,
    constants_report_types,
    constants_scan_types,
    customers,
    data-types,
    diagnocat-sessions,
    diagnocat_patients,
    diagnocat_pdf_types,
    diagnocat_pdfs,
    diagnocat_status,
    doctor-attributes,
    doctor-categories,
    doctor-eav,
    doctors,
    email_templates,
    ip-names,
    ip-visitors,
    months,
    mysql_migrations_347ertt3e,
    patient-attributes,
    patient-categories,
    patient-eav,
    patients,
    practice-attributes,
    practice-categories,
    practice-eav,
    practices,
    practices-doctors,
    products,
    roles_permissions,
    roles_to_permissions,
    settings,
    support-tickets,
    tbl_2d2branches,
    tbl_2d2branches_old_price,
    tbl_2d2doctors,
    tbl_2d_additional_outputs,
    tbl_2d_outputs2branches,
    tbl_2d_outputs2branches_old_price,
    tbl_2d_outputs2doctors,
    tbl_actions_log,
    tbl_additional_2d_outputs_individual_prices,
    tbl_additional_2d_outputs_prices,
    tbl_additional_2d_outputs_prices_old_price,
    tbl_additional_holidays,
    tbl_additional_outputs,
    tbl_additional_outputs_individual_prices,
    tbl_additional_outputs_prices,
    tbl_additional_outputs_prices_old_price,
    tbl_additional_services2branches,
    tbl_additional_services2branches_old_price,
    tbl_additional_services2doctors,
    tbl_additional_waiting_lists,
    tbl_app2invoices,
    tbl_appointments,
    tbl_appointments_1_11_2020,
    tbl_appointments_bkp_24_8_20,
    tbl_appointments_copy2doctors,
    tbl_appointments_notes,
    tbl_appointments_reminders,
    tbl_appointments_statuses,
    tbl_appointments_structure,
    tbl_auto_respond_mails,
    tbl_bank_statements,
    tbl_banking,
    tbl_base_upload_types,
    tbl_block_free_history,
    tbl_blocked_slots,
    tbl_branch_settings,
    tbl_branches,
    tbl_card_payments_log,
    tbl_check_list,
    tbl_check_list_log,
    tbl_checkin,
    tbl_checkin_bonus_types,
    tbl_checkin_bonuses,
    tbl_checkin_bonustypes2users,
    tbl_checkin_settings,
    tbl_cheques,
    tbl_confirmed_overtime,
    tbl_connected_doctors,
    tbl_countries,
    tbl_ctdent_d2d_outputs_pacs_links,
    tbl_ctdent_pacs_links,
    tbl_ctdent_xelis_planner_links,
    tbl_days_notes,
    tbl_dentists_upload,
    tbl_doctors,
    tbl_doctors_agrement_persons,
    tbl_doctors_duplicates,
    tbl_doctors_notes,
    tbl_doctors_old,
    tbl_doctors_online_visits,
    tbl_doctors_payments_notes,
    tbl_doctors_referrals,
    tbl_encryption_decryption,
    tbl_equipments,
    tbl_events,
    tbl_expense_names,
    tbl_expenses,
    tbl_expenses_files,
    tbl_expenses_groups,
    tbl_expenses_payment_methods,
    tbl_expenses_types,
    tbl_extras2branches,
    tbl_extras2branches_old_price,
    tbl_extras2branches_order_report,
    tbl_extras2doctors,
    tbl_extras2doctors_old_price,
    tbl_extras2doctors_old_price_2,
    tbl_feedback_categories,
    tbl_feedback_questions,
    tbl_feedback_records,
    tbl_feedback_score,
    tbl_final_demand_email,
    tbl_floatbox_positions,
    tbl_formats2branches,
    tbl_formats2branches_old_price,
    tbl_formats2doctors,
    tbl_formats2doctors_old_price,
    tbl_heard_about_us_sources,
    tbl_holded_slots,
    tbl_holidays,
    tbl_intraoral_blocked_slots,
    tbl_invoices,
    tbl_invoices_notes,
    tbl_invoices_reminder,
    tbl_justifications,
    tbl_lecture_feedback,
    tbl_lecture_feedback_answers,
    tbl_lecture_feedback_questions,
    tbl_lecture_invitations,
    tbl_lectures,
    tbl_lectures_mail_templates,
    tbl_log,
    tbl_log_feeder,
    tbl_log_types,
    tbl_mails_templates,
    tbl_mails_templates_old,
    tbl_management,
    tbl_management_feedback,
    tbl_manually_activated_doctors,
    tbl_message_requests,
    tbl_messages,
    tbl_messages_feedback,
    tbl_messaging_deleted_threads2users,
    tbl_messaging_messages,
    tbl_messaging_messages2users,
    tbl_messaging_threads,
    tbl_messaging_threads2users,
    tbl_modules,
    tbl_notepad,
    tbl_offers,
    tbl_outputs2branches,
    tbl_outputs2branches_old_price,
    tbl_outputs2doctors,
    tbl_outputs2doctors_old_price,
    tbl_outsource,
    tbl_petty_cash_expenses,
    tbl_phone_cases,
    tbl_phonebook,
    tbl_print_referral_settings,
    tbl_products,
    tbl_public_holidays,
    tbl_quality_assurance,
    tbl_quality_control,
    tbl_review_account_reminder,
    tbl_roles,
    tbl_sales_actions,
    tbl_sales_db,
    tbl_sales_diary,
    tbl_sales_feedback,
    tbl_sales_feedback_questions,
    tbl_sales_followup,
    tbl_sales_made_a_call,
    tbl_sales_reminders,
    tbl_sales_statuses,
    tbl_sales_users_settings,
    tbl_schedule,
    tbl_schedule_history_list,
    tbl_sent_hard_copy,
    tbl_shared_appointments2doctors,
    tbl_sms,
    tbl_sms_templates,
    tbl_specail_available_slots,
    tbl_support_inbox,
    tbl_telephone_feedback,
    tbl_telephone_feedback_answers,
    tbl_telephone_feedback_questions,
    tbl_testimonials,
    tbl_time_log,
    tbl_uncofirmed_doctors,
    tbl_upload_types_explanations,
    tbl_upload_types_extensions,
    tbl_uploads,
    tbl_uploads_new,
    tbl_urgent_processing,
    tbl_user_expense,
    tbl_user_session_activity,
    tbl_users,
    tbl_users_forms_state,
    tbl_users_holiday_days,
    tbl_users_todo_lists,
    tbl_walk_in_patients,
    user_roles,
    users,
    users_to_roles,
    weekdays,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
