define(function(templates) {return {templates: function(section) {var Hogan = require('hogan.js');
if (!!!templates) var templates = {};
templates["factbook"] = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div id=\"profile\">");t.b("\n" + i);t.b("	<div class=\"tab communications\">");t.b("\n" + i);t.b("		<input id=\"tab-four\" type=\"radio\" name=\"tabs2\">");t.b("\n" + i);t.b("		<label for=\"tab-four\">communications</label>");t.b("\n" + i);t.b("		<div class=\"tab-content\">");t.b("\n" + i);t.b("			<div class=\"row\">");t.b("\n" + i);t.b("				<div class=\"medium-8 columns\">");t.b("\n" + i);if(t.s(t.f("fixed_phones_total",c,p,1),c,p,0,262,393,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("						<div class=\"small-12 medium-6 columns stat\">");t.b("\n" + i);t.b("							Fixed Phones");t.b("\n" + i);t.b("							<em>");t.b(t.v(t.f("fixed_phones_total",c,p,0)));t.b("</em>");t.b("\n" + i);t.b("						</div>");t.b("\n" + i);});c.pop();}if(t.s(t.f("fixed_phones_subs_per_100",c,p,1),c,p,0,452,619,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("						<div class=\"small-12 medium-6 columns stat\">");t.b("\n" + i);t.b("							Fixed-Phones Subscriptions Per 100 people");t.b("\n" + i);t.b("							<em>");t.b(t.v(t.f("fixed_phones_subs_per_100",c,p,0)));t.b("</em>");t.b("\n" + i);t.b("						</div>");t.b("\n" + i);});c.pop();}if(t.s(t.f("mobile_phones_total",c,p,1),c,p,0,679,812,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("						<div class=\"small-12 medium-6 columns stat\">");t.b("\n" + i);t.b("							Mobile Phones");t.b("\n" + i);t.b("							<em>");t.b(t.v(t.f("mobile_phones_total",c,p,0)));t.b("</em>");t.b("\n" + i);t.b("						</div>");t.b("\n" + i);});c.pop();}if(t.s(t.f("mobile_phones_subs_per_100",c,p,1),c,p,0,873,1027,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("						<div class=\"small-12 medium-6 columns stat\">Mobile Subscriptions Per 100 people");t.b("\n" + i);t.b("							<em>");t.b(t.v(t.f("mobile_phones_subs_per_100",c,p,0)));t.b("</em>");t.b("\n" + i);t.b("						</div>");t.b("\n" + i);});c.pop();}if(t.s(t.f("internet_country_code",c,p,1),c,p,0,1090,1226,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("						<div class=\"small-12 medium-6 columns stat\">Internet Country Code");t.b("\n" + i);t.b("							<em>.");t.b(t.v(t.f("internet_country_code",c,p,0)));t.b("</em>");t.b("\n" + i);t.b("						</div>");t.b("\n" + i);});c.pop();}if(t.s(t.f("internet_total_users",c,p,1),c,p,0,1283,1410,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("						<div class=\"small-12 medium-6 columns stat\">Internet Users");t.b("\n" + i);t.b("							<em>");t.b(t.v(t.f("internet_total_users",c,p,0)));t.b("</em>");t.b("\n" + i);t.b("						</div>");t.b("\n" + i);});c.pop();}if(t.s(t.f("internet_population_percent",c,p,1),c,p,0,1473,1625,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("						<div class=\"small-12 medium-6 columns stat\">Population with Internet Access");t.b("\n" + i);t.b("							<em>");t.b(t.v(t.f("internet_population_percent",c,p,0)));t.b("%</em>");t.b("\n" + i);t.b("						</div>");t.b("\n" + i);});c.pop();}t.b("				</div>");t.b("\n" + i);t.b("				<div class=\"medium-4 columns\">");t.b("\n" + i);if(t.s(t.f("phone_system_general_assessment",c,p,1),c,p,0,1745,1828,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("						General Assessment<br><br>");t.b("\n" + i);t.b("						");t.b(t.v(t.f("phone_system_general_assessment",c,p,0)));t.b("\n" + i);});c.pop();}if(t.s(t.f("phone_system_international",c,p,1),c,p,0,1901,1987,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("						Phone System International<br><br>");t.b("\n" + i);t.b("						");t.b(t.v(t.f("phone_system_international",c,p,0)));t.b("\n" + i);});c.pop();}if(t.s(t.f("phone_system_domestic",c,p,1),c,p,0,2050,2126,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("						Phone System Domestic<br><br>");t.b("\n" + i);t.b("						");t.b(t.v(t.f("phone_system_domestic",c,p,0)));t.b("\n" + i);});c.pop();}if(t.s(t.f("broadcast_media",c,p,1),c,p,0,2178,2242,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("						Broadcast Media<br><br>");t.b("\n" + i);t.b("						");t.b(t.v(t.f("broadcast_media",c,p,0)));t.b("\n" + i);});c.pop();}t.b("				</div>");t.b("\n" + i);t.b("			</div>");t.b("\n" + i);t.b("		</div>");t.b("\n" + i);t.b("	</div>");t.b("\n" + i);t.b("<div class=\"tab\">");t.b("\n" + i);t.b("	<input id=\"tab-government\" type=\"radio\" name=\"tabs2\">");t.b("\n" + i);t.b("	<label for=\"tab-government\">government</label>");t.b("\n");t.b("\n" + i);t.b("	<div class=\"tab-content\">");t.b("\n" + i);t.b("		");if(t.s(t.f("name",c,p,1),c,p,0,2461,2525,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("<div class=\"row\"><span class=\"stat\">name</span><em>");t.b(t.v(t.f("name",c,p,0)));t.b("</em>");});c.pop();}t.b("\n" + i);t.b("		");if(t.s(t.f("conventional_long_form",c,p,1),c,p,0,2564,2641,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("<span class=\"stat\">Long Form Name<em>");t.b(t.v(t.f("conventional_long_form",c,p,0)));t.b("</em></span>");});c.pop();}t.b("\n" + i);t.b("		");if(t.s(t.f("conventional_short_form",c,p,1),c,p,0,2699,2786,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("<span class=\"stat\">conventional_short_form<em>");t.b(t.v(t.f("conventional_short_form",c,p,0)));t.b("</em></span>");});c.pop();}t.b("\n" + i);t.b("		");if(t.s(t.f("name_etymology",c,p,1),c,p,0,2836,2886,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("<h3>Name Etymology</h3><p>");t.b(t.v(t.f("name_etymology",c,p,0)));t.b("</p>");});c.pop();}t.b("\n" + i);t.b("	</div>");t.b("\n");t.b("\n" + i);t.b("	");if(t.s(t.f("dependency_status",c,p,1),c,p,0,2938,3013,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("<span class=\"stat\">dependency_status<em>");t.b(t.v(t.f("dependency_status",c,p,0)));t.b("</em></span>");});c.pop();}t.b("\n" + i);t.b("	");if(t.s(t.f("government_type",c,p,1),c,p,0,3057,3128,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("<span class=\"stat\">government_type<em>");t.b(t.v(t.f("government_type",c,p,0)));t.b("</em></span>");});c.pop();}t.b("\n" + i);t.b("	");if(t.s(t.f("capital",c,p,1),c,p,0,3162,3217,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("<span class=\"stat\">capital<em>");t.b(t.v(t.f("capital",c,p,0)));t.b("</em></span>");});c.pop();}t.b("\n" + i);t.b("	");if(t.s(t.f("capital_coordinates",c,p,1),c,p,0,3255,3334,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("<span class=\"stat\">capital_coordinates<em>");t.b(t.v(t.f("capital_coordinates",c,p,0)));t.b("</em></span>");});c.pop();}t.b("\n" + i);t.b("	");if(t.s(t.f("capital_time_zone",c,p,1),c,p,0,3382,3457,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("<span class=\"stat\">capital_time_zone<em>");t.b(t.v(t.f("capital_time_zone",c,p,0)));t.b("</em></span>");});c.pop();}t.b("\n" + i);t.b("	");if(t.s(t.f("administrative_divisions",c,p,1),c,p,0,3510,3599,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("<span class=\"stat\">administrative_divisions<em>");t.b(t.v(t.f("administrative_divisions",c,p,0)));t.b("</em></span>");});c.pop();}t.b("\n" + i);t.b("	");if(t.s(t.f("administrative_divisions_note",c,p,1),c,p,0,3664,3763,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("<span class=\"stat\">administrative_divisions_note<em>");t.b(t.v(t.f("administrative_divisions_note",c,p,0)));t.b("</em></span>");});c.pop();}t.b("\n" + i);t.b("	");if(t.s(t.f("independence",c,p,1),c,p,0,3816,3881,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("<span class=\"stat\">independence<em>");t.b(t.v(t.f("independence",c,p,0)));t.b("</em></span>");});c.pop();}t.b("\n" + i);t.b("	");if(t.s(t.f("national_holiday",c,p,1),c,p,0,3921,3994,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("<span class=\"stat\">national_holiday<em>");t.b(t.v(t.f("national_holiday",c,p,0)));t.b("</em></span>");});c.pop();}t.b("\n" + i);t.b("	");if(t.s(t.f("constitution",c,p,1),c,p,0,4034,4099,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("<span class=\"stat\">constitution<em>");t.b(t.v(t.f("constitution",c,p,0)));t.b("</em></span>");});c.pop();}t.b("\n" + i);t.b("	");if(t.s(t.f("legal_system",c,p,1),c,p,0,4135,4200,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("<span class=\"stat\">legal_system<em>");t.b(t.v(t.f("legal_system",c,p,0)));t.b("</em></span>");});c.pop();}t.b("\n" + i);t.b("	");if(t.s(t.f("citizenship",c,p,1),c,p,0,4235,4298,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("<span class=\"stat\">citizenship<em>");t.b(t.v(t.f("citizenship",c,p,0)));t.b("</em></span>");});c.pop();}t.b("\n" + i);t.b("	");if(t.s(t.f("suffrage",c,p,1),c,p,0,4329,4386,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("<span class=\"stat\">suffrage<em>");t.b(t.v(t.f("suffrage",c,p,0)));t.b("</em></span>");});c.pop();}t.b("\n" + i);t.b("	");if(t.s(t.f("executive_chief_of_state",c,p,1),c,p,0,4430,4519,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("<span class=\"stat\">executive_chief_of_state<em>");t.b(t.v(t.f("executive_chief_of_state",c,p,0)));t.b("</em></span>");});c.pop();}t.b("\n" + i);t.b("	");if(t.s(t.f("executive_head_of_government",c,p,1),c,p,0,4583,4680,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("<span class=\"stat\">executive_head_of_government<em>");t.b(t.v(t.f("executive_head_of_government",c,p,0)));t.b("</em></span>");});c.pop();}t.b("\n" + i);t.b("	");if(t.s(t.f("executive_cabinet",c,p,1),c,p,0,4737,4812,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("<span class=\"stat\">executive_cabinet<em>");t.b(t.v(t.f("executive_cabinet",c,p,0)));t.b("</em></span>");});c.pop();}t.b("\n" + i);t.b("	");if(t.s(t.f("executive_elections",c,p,1),c,p,0,4860,4939,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("<span class=\"stat\">executive_elections<em>");t.b(t.v(t.f("executive_elections",c,p,0)));t.b("</em></span>");});c.pop();}t.b("\n" + i);t.b("	");if(t.s(t.f("executive_election_results",c,p,1),c,p,0,4996,5089,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("<span class=\"stat\">executive_election_results<em>");t.b(t.v(t.f("executive_election_results",c,p,0)));t.b("</em></span>");});c.pop();}t.b("\n" + i);t.b("	");if(t.s(t.f("legislative_description",c,p,1),c,p,0,5150,5237,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("<span class=\"stat\">legislative_description<em>");t.b(t.v(t.f("legislative_description",c,p,0)));t.b("</em></span>");});c.pop();}t.b("\n" + i);t.b("	");if(t.s(t.f("legislative_elections",c,p,1),c,p,0,5293,5376,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("<span class=\"stat\">legislative_elections<em>");t.b(t.v(t.f("legislative_elections",c,p,0)));t.b("</em></span>");});c.pop();}t.b("\n" + i);t.b("	");if(t.s(t.f("legislative_election_results",c,p,1),c,p,0,5437,5534,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("<span class=\"stat\">legislative_election_results<em>");t.b(t.v(t.f("legislative_election_results",c,p,0)));t.b("</em></span>");});c.pop();}t.b("\n" + i);t.b("	");if(t.s(t.f("legislative_highest_courts",c,p,1),c,p,0,5600,5693,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("<span class=\"stat\">legislative_highest_courts<em>");t.b(t.v(t.f("legislative_highest_courts",c,p,0)));t.b("</em></span>");});c.pop();}t.b("\n" + i);t.b("	");if(t.s(t.f("legislative_judge_selection",c,p,1),c,p,0,5758,5853,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("<span class=\"stat\">legislative_judge_selection<em>");t.b(t.v(t.f("legislative_judge_selection",c,p,0)));t.b("</em></span>");});c.pop();}t.b("\n" + i);t.b("	");if(t.s(t.f("legislative_subordinate_courts",c,p,1),c,p,0,5922,6023,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("<span class=\"stat\">legislative_subordinate_courts<em>");t.b(t.v(t.f("legislative_subordinate_courts",c,p,0)));t.b("</em></span>");});c.pop();}t.b("\n" + i);t.b("	");if(t.s(t.f("political_parties",c,p,1),c,p,0,6082,6157,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("<span class=\"stat\">political_parties<em>");t.b(t.v(t.f("political_parties",c,p,0)));t.b("</em></span>");});c.pop();}t.b("\n" + i);t.b("	");if(t.s(t.f("political_pressure",c,p,1),c,p,0,6204,6281,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("<span class=\"stat\">political_pressure<em>");t.b(t.v(t.f("political_pressure",c,p,0)));t.b("</em></span>");});c.pop();}t.b("\n" + i);t.b("	");if(t.s(t.f("international_organization_participation",c,p,1),c,p,0,6351,6472,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("<span class=\"stat\">international_organization_participation<em>");t.b(t.v(t.f("international_organization_participation",c,p,0)));t.b("</em></span>");});c.pop();}t.b("\n" + i);t.b("	");if(t.s(t.f("diplomatic_representation_in_usa",c,p,1),c,p,0,6556,6661,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("<span class=\"stat\">diplomatic_representation_in_usa<em>");t.b(t.v(t.f("diplomatic_representation_in_usa",c,p,0)));t.b("</em></span>");});c.pop();}t.b("\n" + i);t.b("	");if(t.s(t.f("diplomatic_representation_from_usa",c,p,1),c,p,0,6739,6848,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("<span class=\"stat\">diplomatic_representation_from_usa<em>");t.b(t.v(t.f("diplomatic_representation_from_usa",c,p,0)));t.b("</em></span>");});c.pop();}t.b("\n" + i);t.b("	");if(t.s(t.f("flag_description",c,p,1),c,p,0,6910,6983,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("<span class=\"stat\">flag_description<em>");t.b(t.v(t.f("flag_description",c,p,0)));t.b("</em></span>");});c.pop();}t.b("\n" + i);t.b("	");if(t.s(t.f("national_symbols",c,p,1),c,p,0,7027,7100,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("<span class=\"stat\">national_symbols<em>");t.b(t.v(t.f("national_symbols",c,p,0)));t.b("</em></span>");});c.pop();}t.b("\n" + i);t.b("	");if(t.s(t.f("national_anthem",c,p,1),c,p,0,7143,7214,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("<span class=\"stat\">national_anthem<em>");t.b(t.v(t.f("national_anthem",c,p,0)));t.b("</em></span>");});c.pop();}t.b("\n" + i);t.b("</div>");t.b("\n" + i);t.b("</div>");t.b("\n" + i);if(t.s(t.f("economy",c,p,1),c,p,0,7261,10500,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("		<div class=\"tab\">");t.b("\n" + i);t.b("			<input id=\"tab-economy\" type=\"radio\" name=\"tabs2\">");t.b("\n" + i);t.b("			<label for=\"tab-economy\">economy</label>");t.b("\n" + i);t.b("			<div class=\"tab-content\">");t.b("\n" + i);t.b("				<span>overview <em>");t.b(t.v(t.f("overview",c,p,0)));t.b("</em></span>");t.b("\n" + i);t.b("				<span>gdp_power_parity <em>");t.b(t.v(t.f("gdp_power_parity",c,p,0)));t.b("</em></span>");t.b("\n" + i);t.b("				<span>gdp_real_growth <em>");t.b(t.v(t.f("gdp_real_growth",c,p,0)));t.b("</em></span>");t.b("\n" + i);t.b("				<span>gdp_per_capita <em>");t.b(t.v(t.f("gdp_per_capita",c,p,0)));t.b("</em></span>");t.b("\n" + i);t.b("				<span>gdp_household_consumption <em>");t.b(t.v(t.f("gdp_household_consumption",c,p,0)));t.b("</em></span>");t.b("\n" + i);t.b("				<span>gdp_consumption <em>");t.b(t.v(t.f("gdp_consumption",c,p,0)));t.b("</em></span>");t.b("\n" + i);t.b("				<span>gdp_investment_in_fixed_capital <em>");t.b(t.v(t.f("gdp_investment_in_fixed_capital",c,p,0)));t.b("</em></span>");t.b("\n" + i);t.b("				<span>gdp_investment_in_inventories <em>");t.b(t.v(t.f("gdp_investment_in_inventories",c,p,0)));t.b("</em></span>");t.b("\n" + i);t.b("				<span>gdp_exports <em>");t.b(t.v(t.f("gdp_exports",c,p,0)));t.b("</em></span>");t.b("\n" + i);t.b("				<span>gdp_imports <em>");t.b(t.v(t.f("gdp_imports",c,p,0)));t.b("</em></span>");t.b("\n" + i);t.b("				<span>gdp_sector_agriculture <em>");t.b(t.v(t.f("gdp_sector_agriculture",c,p,0)));t.b("</em></span>");t.b("\n" + i);t.b("				<span>gdp_sector_industry <em>");t.b(t.v(t.f("gdp_sector_industry",c,p,0)));t.b("</em></span>");t.b("\n" + i);t.b("				<span>gdp_sector_services <em>");t.b(t.v(t.f("gdp_sector_services",c,p,0)));t.b("</em></span>");t.b("\n" + i);t.b("				<span>agriculture_products <em>");t.b(t.v(t.f("agriculture_products",c,p,0)));t.b("</em></span>");t.b("\n" + i);t.b("				<span>industries <em>");t.b(t.v(t.f("industries",c,p,0)));t.b("</em></span>");t.b("\n" + i);t.b("				<span>industrial_growth_rate <em>");t.b(t.v(t.f("industrial_growth_rate",c,p,0)));t.b("</em></span>");t.b("\n" + i);t.b("				<span>labor_force <em>");t.b(t.v(t.f("labor_force",c,p,0)));t.b("</em></span>");t.b("\n" + i);t.b("				<span>labor_force_notes <em>");t.b(t.v(t.f("labor_force_notes",c,p,0)));t.b("</em></span>");t.b("\n" + i);t.b("				<span>labor_force_services <em>");t.b(t.v(t.f("labor_force_services",c,p,0)));t.b("</em></span>");t.b("\n" + i);t.b("				<span>labor_force_industry <em>");t.b(t.v(t.f("labor_force_industry",c,p,0)));t.b("</em></span>");t.b("\n" + i);t.b("				<span>labor_force_agriculture <em>");t.b(t.v(t.f("labor_force_agriculture",c,p,0)));t.b("</em></span>");t.b("\n" + i);t.b("				<span>labor_force_occupation_notes <em>");t.b(t.v(t.f("labor_force_occupation_notes",c,p,0)));t.b("</em></span>");t.b("\n" + i);t.b("				<span>unemployment_rate <em>");t.b(t.v(t.f("unemployment_rate",c,p,0)));t.b("</em></span>");t.b("\n" + i);t.b("				<span>population_below_poverty <em>");t.b(t.v(t.f("population_below_poverty",c,p,0)));t.b("</em></span>");t.b("\n" + i);t.b("				<span>household_income_lowest_10 <em>");t.b(t.v(t.f("household_income_lowest_10",c,p,0)));t.b("</em></span>");t.b("\n" + i);t.b("				<span>household_income_highest_10 <em>");t.b(t.v(t.f("household_income_highest_10",c,p,0)));t.b("</em></span>");t.b("\n" + i);t.b("				<span>budget_revenues <em>");t.b(t.v(t.f("budget_revenues",c,p,0)));t.b("</em></span>");t.b("\n" + i);t.b("				<span>taxes_revenues <em>");t.b(t.v(t.f("taxes_revenues",c,p,0)));t.b("</em></span>");t.b("\n" + i);t.b("				<span>budget_net <em>");t.b(t.v(t.f("budget_net",c,p,0)));t.b("</em></span>");t.b("\n" + i);t.b("				<span>public_debt <em>");t.b(t.v(t.f("public_debt",c,p,0)));t.b("</em></span>");t.b("\n" + i);t.b("				<span>external_debt <em>");t.b(t.v(t.f("external_debt",c,p,0)));t.b("</em></span>");t.b("\n" + i);t.b("				<span>fiscal_year <em>");t.b(t.v(t.f("fiscal_year",c,p,0)));t.b("</em></span>");t.b("\n" + i);t.b("				<span>inflation_rate <em>");t.b(t.v(t.f("inflation_rate",c,p,0)));t.b("</em></span>");t.b("\n" + i);t.b("				<span>central_bank_discount_rate <em>");t.b(t.v(t.f("central_bank_discount_rate",c,p,0)));t.b("</em></span>");t.b("\n" + i);t.b("				<span>commercial_bank_prime_lending_rate <em>");t.b(t.v(t.f("commercial_bank_prime_lending_rate",c,p,0)));t.b("</em></span>");t.b("\n" + i);t.b("				<span>stock_money_narrow <em>");t.b(t.v(t.f("stock_money_narrow",c,p,0)));t.b("</em></span>");t.b("\n" + i);t.b("				<span>stock_money_broad <em>");t.b(t.v(t.f("stock_money_broad",c,p,0)));t.b("</em></span>");t.b("\n" + i);t.b("				<span>stock_domestic_credit <em>");t.b(t.v(t.f("stock_domestic_credit",c,p,0)));t.b("</em></span>");t.b("\n" + i);t.b("				<span>exports <em>");t.b(t.v(t.f("exports",c,p,0)));t.b("</em></span>");t.b("\n" + i);t.b("				<span>exports_commodities <em>");t.b(t.v(t.f("exports_commodities",c,p,0)));t.b("</em></span>");t.b("\n" + i);t.b("				<span>exports_partners <em>");t.b(t.v(t.f("exports_partners",c,p,0)));t.b("</em></span>");t.b("\n" + i);t.b("				<span>imports <em>");t.b(t.v(t.f("imports",c,p,0)));t.b("</em></span>");t.b("\n" + i);t.b("				<span>imports_commodities <em>");t.b(t.v(t.f("imports_commodities",c,p,0)));t.b("</em></span>");t.b("\n" + i);t.b("				<span>imports_partners <em>");t.b(t.v(t.f("imports_partners",c,p,0)));t.b("</em></span>");t.b("\n" + i);t.b("			</div>");t.b("\n" + i);t.b("		</div>");t.b("\n" + i);});c.pop();}if(t.s(t.f("issues",c,p,1),c,p,0,10524,10764,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("		<div class=\"tab\">");t.b("\n" + i);t.b("			<input id=\"tab-issues\" type=\"radio\" name=\"tabs2\">");t.b("\n" + i);t.b("			<label for=\"tab-issues\">issues</label>");t.b("\n" + i);t.b("			<div class=\"tab-content\">");t.b("\n" + i);t.b("				");t.b(t.v(t.f("international_disputes",c,p,0)));t.b("\n" + i);t.b("				");t.b(t.v(t.f("illicit_drugs",c,p,0)));t.b("\n" + i);t.b("				");t.b(t.v(t.f("refugees",c,p,0)));t.b("\n" + i);t.b("			</div>");t.b("\n" + i);t.b("		</div>");t.b("\n" + i);});c.pop();}if(t.s(t.f("energy",c,p,1),c,p,0,10787,11954,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("		<div class=\"tab\">");t.b("\n" + i);t.b("			<input id=\"tab-energy\" type=\"radio\" name=\"tabs2\">");t.b("\n" + i);t.b("			<label for=\"tab-energy\">energy</label>");t.b("\n" + i);t.b("			<div class=\"tab-content\">");t.b("\n" + i);t.b("				<span>");t.b(t.v(t.f("electricity_production",c,p,0)));t.b("</span>");t.b("\n" + i);t.b("				<span>");t.b(t.v(t.f("electricity_consumption",c,p,0)));t.b("</span>");t.b("\n" + i);t.b("				<span>");t.b(t.v(t.f("electricity_exports",c,p,0)));t.b("</span>");t.b("\n" + i);t.b("				<span>");t.b(t.v(t.f("electricity_imports",c,p,0)));t.b("</span>");t.b("\n" + i);t.b("				<span>");t.b(t.v(t.f("electricity_generating_capacity",c,p,0)));t.b("</span>");t.b("\n" + i);t.b("				<span>");t.b(t.v(t.f("electricity_fossil_fuels",c,p,0)));t.b("</span>");t.b("\n" + i);t.b("				<span>");t.b(t.v(t.f("electricity_nuclear",c,p,0)));t.b("</span>");t.b("\n" + i);t.b("				<span>");t.b(t.v(t.f("electricity_hydroelectric",c,p,0)));t.b("</span>");t.b("\n" + i);t.b("				<span>");t.b(t.v(t.f("electricity_renewable",c,p,0)));t.b("</span>");t.b("\n" + i);t.b("				<span>");t.b(t.v(t.f("crude_oil_production",c,p,0)));t.b("</span>");t.b("\n" + i);t.b("				<span>");t.b(t.v(t.f("crude_oil_exports",c,p,0)));t.b("</span>");t.b("\n" + i);t.b("				<span>");t.b(t.v(t.f("crude_oil_imports",c,p,0)));t.b("</span>");t.b("\n" + i);t.b("				<span>");t.b(t.v(t.f("crude_oil_reserves",c,p,0)));t.b("</span>");t.b("\n" + i);t.b("				<span>");t.b(t.v(t.f("petrol_production",c,p,0)));t.b("</span>");t.b("\n" + i);t.b("				<span>");t.b(t.v(t.f("petrol_consumption",c,p,0)));t.b("</span>");t.b("\n" + i);t.b("				<span>");t.b(t.v(t.f("petrol_exports",c,p,0)));t.b("</span>");t.b("\n" + i);t.b("				<span>");t.b(t.v(t.f("petrol_imports",c,p,0)));t.b("</span>");t.b("\n" + i);t.b("				<span>");t.b(t.v(t.f("natural_gas_production",c,p,0)));t.b("</span>");t.b("\n" + i);t.b("				<span>");t.b(t.v(t.f("natural_gas_consumption",c,p,0)));t.b("</span>");t.b("\n" + i);t.b("				<span>");t.b(t.v(t.f("natural_gas_exports",c,p,0)));t.b("</span>");t.b("\n" + i);t.b("				<span>");t.b(t.v(t.f("natural_gas_imports",c,p,0)));t.b("</span>");t.b("\n" + i);t.b("				<span>");t.b(t.v(t.f("natural_gas_reserves",c,p,0)));t.b("</span>");t.b("\n" + i);t.b("				<span>");t.b(t.v(t.f("co2_output",c,p,0)));t.b("</span>");t.b("\n" + i);t.b("			</div>");t.b("\n" + i);t.b("		</div>");t.b("\n" + i);});c.pop();}if(t.s(t.f("geography",c,p,1),c,p,0,11980,12725,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("		<div class=\"tab\">");t.b("\n" + i);t.b("			<input id=\"tab-geography\" type=\"radio\" name=\"tabs2\">");t.b("\n" + i);t.b("			<label for=\"tab-geography\">geography</label>");t.b("\n" + i);t.b("			<div class=\"tab-content\">");t.b("\n" + i);t.b("				<span>location_description ");t.b(t.v(t.f("location_description",c,p,0)));t.b("</span>");t.b("\n" + i);t.b("				<span>coordinates ");t.b(t.v(t.f("coordinates",c,p,0)));t.b("</span>");t.b("\n" + i);t.b("				<span>mapReferences ");t.b(t.v(t.f("mapReferences",c,p,0)));t.b("</span>");t.b("\n" + i);t.b("				<span>Area sqkm total ");t.b(t.v(t.f("area_sqkm_total",c,p,0)));t.b("</span>");t.b("\n" + i);t.b("				<span>Area sqkm land ");t.b(t.v(t.f("area_sqkm_land",c,p,0)));t.b("</span>");t.b("\n" + i);t.b("				<span>Area sqkm water ");t.b(t.v(t.f("area_sqkm_water",c,p,0)));t.b("</span>");t.b("\n" + i);t.b("				<span>Coastline ");t.b(t.v(t.f("area_km_coastline",c,p,0)));t.b("</span>");t.b("\n" + i);t.b("				<span>Area note ");t.b(t.v(t.f("area_note",c,p,0)));t.b("</span>");t.b("\n" + i);t.b("				<span>Climate ");t.b(t.v(t.f("climate",c,p,0)));t.b("</span>");t.b("\n" + i);t.b("				<span>Terrain ");t.b(t.v(t.f("terrain",c,p,0)));t.b("</span>");t.b("\n" + i);t.b("				<span>Hazards ");t.b(t.v(t.f("hazards",c,p,0)));t.b("</span>");t.b("\n" + i);t.b("				<span>Notes ");t.b(t.v(t.f("notes",c,p,0)));t.b("</span>");t.b("\n" + i);t.b("			</div>");t.b("\n" + i);t.b("		</div>");t.b("\n" + i);});c.pop();}if(t.s(t.f("transporation",c,p,1),c,p,0,12758,13221,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("		<div class=\"tab\">");t.b("\n" + i);t.b("			<input id=\"tab-transportation\" type=\"radio\" name=\"tabs2\">");t.b("\n" + i);t.b("			<label for=\"tab-transportation\">transportation</label>");t.b("\n" + i);t.b("			<div class=\"tab-content\">");t.b("\n" + i);t.b("				");t.b(t.v(t.f("air_carriers",c,p,0)));t.b("\n" + i);t.b("				");t.b(t.v(t.f("aircraft",c,p,0)));t.b("\n" + i);t.b("				");t.b(t.v(t.f("aircraft_passengers",c,p,0)));t.b("\n" + i);t.b("				");t.b(t.v(t.f("aircraft_freight",c,p,0)));t.b("\n" + i);t.b("				");t.b(t.v(t.f("aircraft_code_prefix",c,p,0)));t.b("\n" + i);t.b("				");t.b(t.v(t.f("airports",c,p,0)));t.b("\n" + i);t.b("				");t.b(t.v(t.f("airports_paved",c,p,0)));t.b("\n" + i);t.b("				");t.b(t.v(t.f("airports_info_date",c,p,0)));t.b("\n" + i);t.b("				");t.b(t.v(t.f("major_seaports",c,p,0)));t.b("\n" + i);t.b("				");t.b(t.v(t.f("oil_terminals",c,p,0)));t.b("\n" + i);t.b("				");t.b(t.v(t.f("cruise_ports",c,p,0)));t.b("\n" + i);t.b("			</div>");t.b("\n" + i);t.b("		</div>");t.b("\n" + i);});c.pop();}t.b("\n" + i);if(t.s(t.f("people",c,p,1),c,p,0,13252,20988,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("	<div class=\"tab\">");t.b("\n" + i);t.b("		<input id=\"tab-people\" type=\"radio\" name=\"tabs2\">");t.b("\n" + i);t.b("		<label for=\"tab-people\">people</label>");t.b("\n" + i);t.b("	<div class=\"tab-content\">");t.b("\n" + i);t.b("	");if(t.s(t.f("population",c,p,1),c,p,0,13408,13457,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" <span>Population <b>");t.b(t.v(t.f("population",c,p,0)));t.b("</b></span> ");});c.pop();}t.b("\n" + i);t.b("		");if(t.s(t.f("population_date",c,p,1),c,p,0,13495,13554,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" <span>Population Date <b>");t.b(t.v(t.f("population_date",c,p,0)));t.b("</b></span> ");});c.pop();}t.b("\n" + i);t.b("		");if(t.s(t.f("nationality_noun",c,p,1),c,p,0,13598,13659,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" <span>Nationality Noun <b>");t.b(t.v(t.f("nationality_noun",c,p,0)));t.b("</b></span> ");});c.pop();}t.b("\n" + i);t.b("		");if(t.s(t.f("nationality_adjective",c,p,1),c,p,0,13709,13780,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" <span>Nationality Adjective <b>");t.b(t.v(t.f("nationality_adjective",c,p,0)));t.b("</b></span> ");});c.pop();}t.b("\n" + i);t.b("		");if(t.s(t.f("age_structure_14",c,p,1),c,p,0,13830,13891,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" <span>age_structure_14 <b>");t.b(t.v(t.f("age_structure_14",c,p,0)));t.b("</b></span> ");});c.pop();}t.b("\n" + i);t.b("		");if(t.s(t.f("age_structure_24",c,p,1),c,p,0,13936,13997,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" <span>age_structure_24 <b>");t.b(t.v(t.f("age_structure_24",c,p,0)));t.b("</b></span> ");});c.pop();}t.b("\n" + i);t.b("		");if(t.s(t.f("age_structure_54",c,p,1),c,p,0,14042,14103,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" <span>age_structure_54 <b>");t.b(t.v(t.f("age_structure_54",c,p,0)));t.b("</b></span> ");});c.pop();}t.b("\n" + i);t.b("		");if(t.s(t.f("age_structure_64",c,p,1),c,p,0,14148,14209,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" <span>age_structure_64 <b>");t.b(t.v(t.f("age_structure_64",c,p,0)));t.b("</b></span> ");});c.pop();}t.b("\n" + i);t.b("		");if(t.s(t.f("age_structure_65",c,p,1),c,p,0,14254,14315,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" <span>age_structure_65 <b>");t.b(t.v(t.f("age_structure_65",c,p,0)));t.b("</b></span> ");});c.pop();}t.b("\n" + i);t.b("		");if(t.s(t.f("dependency_total",c,p,1),c,p,0,14360,14421,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" <span>dependency_total <b>");t.b(t.v(t.f("dependency_total",c,p,0)));t.b("</b></span> ");});c.pop();}t.b("\n" + i);t.b("		");if(t.s(t.f("dependency_youth",c,p,1),c,p,0,14466,14527,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" <span>dependency_youth <b>");t.b(t.v(t.f("dependency_youth",c,p,0)));t.b("</b></span> ");});c.pop();}t.b("\n" + i);t.b("		");if(t.s(t.f("dependency_elder",c,p,1),c,p,0,14572,14633,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" <span>dependency_elder <b>");t.b(t.v(t.f("dependency_elder",c,p,0)));t.b("</b></span> ");});c.pop();}t.b("\n" + i);t.b("		");if(t.s(t.f("dependency_potential",c,p,1),c,p,0,14682,14751,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" <span>dependency_potential <b>");t.b(t.v(t.f("dependency_potential",c,p,0)));t.b("</b></span> ");});c.pop();}t.b("\n" + i);t.b("		");if(t.s(t.f("median_age_total",c,p,1),c,p,0,14800,14861,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" <span>median_age_total <b>");t.b(t.v(t.f("median_age_total",c,p,0)));t.b("</b></span> ");});c.pop();}t.b("\n" + i);t.b("		");if(t.s(t.f("median_age_male",c,p,1),c,p,0,14905,14964,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" <span>median_age_male <b>");t.b(t.v(t.f("median_age_male",c,p,0)));t.b("</b></span> ");});c.pop();}t.b("\n" + i);t.b("		");if(t.s(t.f("median_age_female",c,p,1),c,p,0,15009,15072,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" <span>median_age_female <b>");t.b(t.v(t.f("median_age_female",c,p,0)));t.b("</b></span> ");});c.pop();}t.b("\n" + i);t.b("		");if(t.s(t.f("population_growth_rate_percentage",c,p,1),c,p,0,15135,15230,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" <span>population_growth_rate_percentage <b>");t.b(t.v(t.f("population_growth_rate_percentage",c,p,0)));t.b("</b></span> ");});c.pop();}t.b("\n" + i);t.b("		");if(t.s(t.f("birth_rate_per_1k",c,p,1),c,p,0,15293,15356,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" <span>birth_rate_per_1k <b>");t.b(t.v(t.f("birth_rate_per_1k",c,p,0)));t.b("</b></span> ");});c.pop();}t.b("\n" + i);t.b("		");if(t.s(t.f("death_rate_per_1k",c,p,1),c,p,0,15403,15466,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" <span>death_rate_per_1k <b>");t.b(t.v(t.f("death_rate_per_1k",c,p,0)));t.b("</b></span> ");});c.pop();}t.b("\n" + i);t.b("		");if(t.s(t.f("net_migration_per_1k",c,p,1),c,p,0,15516,15585,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" <span>net_migration_per_1k <b>");t.b(t.v(t.f("net_migration_per_1k",c,p,0)));t.b("</b></span> ");});c.pop();}t.b("\n" + i);t.b("		");if(t.s(t.f("population_distribution",c,p,1),c,p,0,15641,15714,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" <div>population_distribution <p>");t.b(t.v(t.f("population_distribution",c,p,0)));t.b("</p></div> ");});c.pop();}t.b("\n" + i);t.b("		");if(t.s(t.f("sex_ratio_birth",c,p,1),c,p,0,15765,15824,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" <span>sex_ratio_birth <b>");t.b(t.v(t.f("sex_ratio_birth",c,p,0)));t.b("</b></span> ");});c.pop();}t.b("\n" + i);t.b("		");if(t.s(t.f("sex_ratio_14",c,p,1),c,p,0,15864,15917,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" <span>sex_ratio_14 <b>");t.b(t.v(t.f("sex_ratio_14",c,p,0)));t.b("</b></span> ");});c.pop();}t.b("\n" + i);t.b("		");if(t.s(t.f("sex_ratio_24",c,p,1),c,p,0,15954,16007,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" <span>sex_ratio_24 <b>");t.b(t.v(t.f("sex_ratio_24",c,p,0)));t.b("</b></span> ");});c.pop();}t.b("\n" + i);t.b("		");if(t.s(t.f("sex_ratio_54",c,p,1),c,p,0,16044,16097,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" <span>sex_ratio_54 <b>");t.b(t.v(t.f("sex_ratio_54",c,p,0)));t.b("</b></span> ");});c.pop();}t.b("\n" + i);t.b("		");if(t.s(t.f("sex_ratio_64",c,p,1),c,p,0,16134,16187,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" <span>sex_ratio_64 <b>");t.b(t.v(t.f("sex_ratio_64",c,p,0)));t.b("</b></span> ");});c.pop();}t.b("\n" + i);t.b("		");if(t.s(t.f("sex_ratio_65",c,p,1),c,p,0,16224,16277,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" <span>sex_ratio_65 <b>");t.b(t.v(t.f("sex_ratio_65",c,p,0)));t.b("</b></span> ");});c.pop();}t.b("\n" + i);t.b("		");if(t.s(t.f("sex_ratio_total",c,p,1),c,p,0,16317,16376,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" <span>sex_ratio_total <b>");t.b(t.v(t.f("sex_ratio_total",c,p,0)));t.b("</b></span> ");});c.pop();}t.b("\n" + i);t.b("		");if(t.s(t.f("mother_age_first_birth",c,p,1),c,p,0,16426,16499,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" <span>mother_age_first_birth <b>");t.b(t.v(t.f("mother_age_first_birth",c,p,0)));t.b("</b></span> ");});c.pop();}t.b("\n" + i);t.b("		");if(t.s(t.f("maternal_mortality_rate",c,p,1),c,p,0,16557,16632,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" <span>maternal_mortality_rate <b>");t.b(t.v(t.f("maternal_mortality_rate",c,p,0)));t.b("</b></span> ");});c.pop();}t.b("\n" + i);t.b("		");if(t.s(t.f("infant_mortality_per_1k_total",c,p,1),c,p,0,16697,16784,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" <span>infant_mortality_per_1k_total <b>");t.b(t.v(t.f("infant_mortality_per_1k_total",c,p,0)));t.b("</b></span> ");});c.pop();}t.b("\n" + i);t.b("		");if(t.s(t.f("infant_mortality_per_1k_male",c,p,1),c,p,0,16854,16939,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" <span>infant_mortality_per_1k_male <b>");t.b(t.v(t.f("infant_mortality_per_1k_male",c,p,0)));t.b("</b></span> ");});c.pop();}t.b("\n" + i);t.b("		");if(t.s(t.f("infant_mortality_per_1k_female",c,p,1),c,p,0,17010,17099,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" <span>infant_mortality_per_1k_female <b>");t.b(t.v(t.f("infant_mortality_per_1k_female",c,p,0)));t.b("</b></span> ");});c.pop();}t.b("\n" + i);t.b("		");if(t.s(t.f("life_expectancy_at_birth_total",c,p,1),c,p,0,17172,17261,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" <span>life_expectancy_at_birth_total <b>");t.b(t.v(t.f("life_expectancy_at_birth_total",c,p,0)));t.b("</b></span> ");});c.pop();}t.b("\n" + i);t.b("		");if(t.s(t.f("life_expectancy_at_birth_male",c,p,1),c,p,0,17333,17420,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" <span>life_expectancy_at_birth_male <b>");t.b(t.v(t.f("life_expectancy_at_birth_male",c,p,0)));t.b("</b></span> ");});c.pop();}t.b("\n" + i);t.b("		");if(t.s(t.f("life_expectancy_at_birth_female",c,p,1),c,p,0,17493,17584,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" <span>life_expectancy_at_birth_female <b>");t.b(t.v(t.f("life_expectancy_at_birth_female",c,p,0)));t.b("</b></span> ");});c.pop();}t.b("\n" + i);t.b("		");if(t.s(t.f("total_fertility_rate",c,p,1),c,p,0,17648,17717,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" <span>total_fertility_rate <b>");t.b(t.v(t.f("total_fertility_rate",c,p,0)));t.b("</b></span> ");});c.pop();}t.b("\n" + i);t.b("		");if(t.s(t.f("contraceptive_prevalence",c,p,1),c,p,0,17774,17851,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" <span>contraceptive_prevalence <b>");t.b(t.v(t.f("contraceptive_prevalence",c,p,0)));t.b("</b></span> ");});c.pop();}t.b("\n" + i);t.b("		");if(t.s(t.f("health_expenditures",c,p,1),c,p,0,17907,17974,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" <span>health_expenditures <b>");t.b(t.v(t.f("health_expenditures",c,p,0)));t.b("</b></span> ");});c.pop();}t.b("\n" + i);t.b("		");if(t.s(t.f("physicians",c,p,1),c,p,0,18016,18065,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" <span>physicians <b>");t.b(t.v(t.f("physicians",c,p,0)));t.b("</b></span> ");});c.pop();}t.b("\n" + i);t.b("		");if(t.s(t.f("hospital_beds",c,p,1),c,p,0,18101,18156,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" <span>hospital_beds <b>");t.b(t.v(t.f("hospital_beds",c,p,0)));t.b("</b></span> ");});c.pop();}t.b("\n" + i);t.b("		");if(t.s(t.f("drinking_water_source_urban_improved",c,p,1),c,p,0,18218,18319,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" <span>drinking_water_source_urban_improved <b>");t.b(t.v(t.f("drinking_water_source_urban_improved",c,p,0)));t.b("</b></span> ");});c.pop();}t.b("\n" + i);t.b("		");if(t.s(t.f("drinking_water_source_rural_improved",c,p,1),c,p,0,18404,18505,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" <span>drinking_water_source_rural_improved <b>");t.b(t.v(t.f("drinking_water_source_rural_improved",c,p,0)));t.b("</b></span> ");});c.pop();}t.b("\n" + i);t.b("		");if(t.s(t.f("sanitation_facility_access_urban_improved",c,p,1),c,p,0,18595,18706,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" <span>sanitation_facility_access_urban_improved <b>");t.b(t.v(t.f("sanitation_facility_access_urban_improved",c,p,0)));t.b("</b></span> ");});c.pop();}t.b("\n" + i);t.b("		");if(t.s(t.f("sanitation_facility_access_rural_improved",c,p,1),c,p,0,18801,18912,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" <span>sanitation_facility_access_rural_improved <b>");t.b(t.v(t.f("sanitation_facility_access_rural_improved",c,p,0)));t.b("</b></span> ");});c.pop();}t.b("\n" + i);t.b("		");if(t.s(t.f("hiv_infection_rate",c,p,1),c,p,0,18984,19049,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" <span>hiv_infection_rate <b>");t.b(t.v(t.f("hiv_infection_rate",c,p,0)));t.b("</b></span> ");});c.pop();}t.b("\n" + i);t.b("		");if(t.s(t.f("hiv_infected",c,p,1),c,p,0,19092,19145,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" <span>hiv_infected <b>");t.b(t.v(t.f("hiv_infected",c,p,0)));t.b("</b></span> ");});c.pop();}t.b("\n" + i);t.b("		");if(t.s(t.f("hiv_deaths",c,p,1),c,p,0,19180,19229,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" <span>hiv_deaths <b>");t.b(t.v(t.f("hiv_deaths",c,p,0)));t.b("</b></span> ");});c.pop();}t.b("\n" + i);t.b("		");if(t.s(t.f("obesity_rate",c,p,1),c,p,0,19264,19317,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" <span>obesity_rate <b>");t.b(t.v(t.f("obesity_rate",c,p,0)));t.b("</b></span> ");});c.pop();}t.b("\n" + i);t.b("		");if(t.s(t.f("underweight_children",c,p,1),c,p,0,19362,19431,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" <span>underweight_children <b>");t.b(t.v(t.f("underweight_children",c,p,0)));t.b("</b></span> ");});c.pop();}t.b("\n" + i);t.b("		");if(t.s(t.f("education_expenditures",c,p,1),c,p,0,19486,19559,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" <span>education_expenditures <b>");t.b(t.v(t.f("education_expenditures",c,p,0)));t.b("</b></span> ");});c.pop();}t.b("\n" + i);t.b("		");if(t.s(t.f("literacy_definition",c,p,1),c,p,0,19613,19680,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" <span>literacy_definition <b>");t.b(t.v(t.f("literacy_definition",c,p,0)));t.b("</b></span> ");});c.pop();}t.b("\n" + i);t.b("		");if(t.s(t.f("literacy_total",c,p,1),c,p,0,19726,19783,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" <span>literacy_total <b>");t.b(t.v(t.f("literacy_total",c,p,0)));t.b("</b></span> ");});c.pop();}t.b("\n" + i);t.b("		");if(t.s(t.f("literacy_male",c,p,1),c,p,0,19823,19878,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" <span>literacy_male <b>");t.b(t.v(t.f("literacy_male",c,p,0)));t.b("</b></span> ");});c.pop();}t.b("\n" + i);t.b("		");if(t.s(t.f("literacy_female",c,p,1),c,p,0,19919,19978,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" <span>literacy_female <b>");t.b(t.v(t.f("literacy_female",c,p,0)));t.b("</b></span> ");});c.pop();}t.b("\n" + i);t.b("		");if(t.s(t.f("school_years_total",c,p,1),c,p,0,20024,20089,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" <span>school_years_total <b>");t.b(t.v(t.f("school_years_total",c,p,0)));t.b("</b></span> ");});c.pop();}t.b("\n" + i);t.b("		");if(t.s(t.f("school_years_male",c,p,1),c,p,0,20137,20200,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" <span>school_years_male <b>");t.b(t.v(t.f("school_years_male",c,p,0)));t.b("</b></span> ");});c.pop();}t.b("\n" + i);t.b("		");if(t.s(t.f("school_years_female",c,p,1),c,p,0,20249,20316,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" <span>school_years_female <b>");t.b(t.v(t.f("school_years_female",c,p,0)));t.b("</b></span> ");});c.pop();}t.b("\n" + i);t.b("		");if(t.s(t.f("child_labor",c,p,1),c,p,0,20359,20410,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" <span>child_labor <b>");t.b(t.v(t.f("child_labor",c,p,0)));t.b("</b></span> ");});c.pop();}t.b("\n" + i);t.b("		");if(t.s(t.f("child_labor_percentage",c,p,1),c,p,0,20456,20529,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" <span>child_labor_percentage <b>");t.b(t.v(t.f("child_labor_percentage",c,p,0)));t.b("</b></span> ");});c.pop();}t.b("\n" + i);t.b("		");if(t.s(t.f("unemployment_youth_total",c,p,1),c,p,0,20588,20665,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" <span>unemployment_youth_total <b>");t.b(t.v(t.f("unemployment_youth_total",c,p,0)));t.b("</b></span> ");});c.pop();}t.b("\n" + i);t.b("		");if(t.s(t.f("unemployment_youth_male",c,p,1),c,p,0,20725,20800,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" <span>unemployment_youth_male <b>");t.b(t.v(t.f("unemployment_youth_male",c,p,0)));t.b("</b></span> ");});c.pop();}t.b("\n" + i);t.b("		");if(t.s(t.f("unemployment_youth_female",c,p,1),c,p,0,20861,20940,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" <span>unemployment_youth_female <b>");t.b(t.v(t.f("unemployment_youth_female",c,p,0)));t.b("</b></span> ");});c.pop();}t.b("\n" + i);t.b("	</div>");t.b("\n" + i);t.b("	</div>");t.b("\n" + i);});c.pop();}t.b("	</div>");t.b("\n");t.b("\n" + i);t.b("	</div>");return t.fl(); },partials: {}, subs: {  }});
if(section) return templates[section];return templates;}}});