import { BaseScene } from "../base/baseScene";
import { ASSET_TYPES } from "../../assets/assetTypes";
import { exitMenu, switchMenu } from "./mapHelper";
import { SCENE_MAP } from "../sceneNames";

export class MapScene extends BaseScene {
    constructor() {
        super(SCENE_MAP);
    }

    init(data) {
        this.assetManager = this.getAssetManager();
        this.places = [];
        this.games = [];
        this.shops = [];
        this.pets = [];
        this.petGames = [];
        this.currentMenu = []; // Current idk just one of the 4 above
        this.extraMenus = []; // Any additonal menus (like pet games)
        this.petGamesVisible = false;
    }

    preloadContent() {
        this.assetManager.load({
            scene: this,
            type: ASSET_TYPES.PACK,
            name: "map",
            paths: ["assets/interfaces/map/map-pack.json"]
        });

        this.assetManager.load({
            scene: this,
            type: ASSET_TYPES.FONT,
            name: "cpBurbankSmallBold",
            paths: ["assets/fonts/cpBurbankSmallBold.ttf"]
        });
    }

    createContent() {
// map_main_background_png
		const map_main_background_png = this.add.image(638, 358, "map", "map_main_background.png");
		map_main_background_png.scaleX = 0.8290538707558507;
		map_main_background_png.scaleY = 0.7275798159186431;

		// map_outer_overlay_png
		const map_outer_overlay_png = this.add.image(639, 360, "map", "map_outer_overlay.png");
		map_outer_overlay_png.scaleX = 0.845083502574399;
		map_outer_overlay_png.scaleY = 0.7560819282457342;

		// map_inner_layer_png
		const map_inner_layer_png = this.add.image(640, 433, "map", "map_inner_layer.png");
		map_inner_layer_png.scaleX = 0.8274513911533022;
		map_inner_layer_png.scaleY = 0.7227178744169294;

		// map_above_town_snow_png
		const map_above_town_snow_png = this.add.image(477, 392, "map", "map_above_town_snow.png");
		map_above_town_snow_png.scaleX = 0.8247372545898876;
		map_above_town_snow_png.scaleY = 0.7399564784654354;

		// map_snow_1_png
		this.add.image(432, 311, "map", "map_snow_1.png");

		// map_soccer_stadium_location_png
		const map_soccer_stadium_location_png = this.add.image(551, 297, "map", "map_soccer_stadium_location.png");
		map_soccer_stadium_location_png.scaleX = 0.9157009872731907;
		map_soccer_stadium_location_png.scaleY = 0.7973824618430202;

		// map_own_igloo_location_png
		const map_own_igloo_location_png = this.add.image(612, 493, "map", "map_own_igloo_location.png");
		map_own_igloo_location_png.scaleX = 0.8595440804870639;
		map_own_igloo_location_png.scaleY = 0.8529606445542897;

		// map_ice_berg_location_png
		const map_ice_berg_location_png = this.add.image(1197, 315, "map", "map_ice_berg_location.png");
		map_ice_berg_location_png.scaleX = 0.8746540840519895;
		map_ice_berg_location_png.scaleY = 0.669142974161553;

		// map_all_igloos_location_png
		const map_all_igloos_location_png = this.add.image(514, 549, "map", "map_all_igloos_location.png");
		map_all_igloos_location_png.scaleX = 0.7295079502169725;
		map_all_igloos_location_png.scaleY = 0.6643102064050737;

		// map_dojo_location_png
		const map_dojo_location_png = this.add.image(772, 206, "map", "map_dojo_location.png");
		map_dojo_location_png.scaleX = 0.7114088544649873;
		map_dojo_location_png.scaleY = 0.7228319982978202;

		// map_docks_locationo_png
		const map_docks_locationo_png = this.add.image(257, 586, "map", "map_docks_locationo.png");
		map_docks_locationo_png.scaleX = 0.7761743158539419;
		map_docks_locationo_png.scaleY = 0.7786542246389321;

		// map_cove_location_png
		const map_cove_location_png = this.add.image(1179, 485, "map", "map_cove_location.png");
		map_cove_location_png.scaleX = 0.7491362044377609;
		map_cove_location_png.scaleY = 0.6935721524557851;

		// map_forest_location_png
		const map_forest_location_png = this.add.image(987, 459, "map", "map_forest_location.png");
		map_forest_location_png.scaleX = 0.8952946314619729;
		map_forest_location_png.scaleY = 0.7295269819833454;

		// map_skate_park_location_png
		const map_skate_park_location_png = this.add.image(1153, 367, "map", "map_skate_park_location.png");
		map_skate_park_location_png.scaleX = 0.7684160898804323;
		map_skate_park_location_png.scaleY = 0.7219060360560453;

		// map_plaza_location_png
		const map_plaza_location_png = this.add.image(827, 437, "map", "map_plaza_location.png");
		map_plaza_location_png.scaleX = 0.7898309718121495;
		map_plaza_location_png.scaleY = 0.7497462484690373;

		// map_puffle_park_location_png
		const map_puffle_park_location_png = this.add.image(773, 350, "map", "map_puffle_park_location.png");
		map_puffle_park_location_png.scaleX = 0.7773179569553047;
		map_puffle_park_location_png.scaleY = 0.6518216648356877;

		// map_snow_forts_location_png
		const map_snow_forts_location_png = this.add.image(648, 392, "map", "map_snow_forts_location.png");
		map_snow_forts_location_png.scaleX = 0.8834584397584915;
		map_snow_forts_location_png.scaleY = 0.6809307936149277;

		// map_mine_location_png
		const map_mine_location_png = this.add.image(983, 350, "map", "map_mine_location.png");
		map_mine_location_png.scaleX = 0.6693481811312569;
		map_mine_location_png.scaleY = 0.6337503089548451;

		// map_snow_2_png
		const map_snow_2_png = this.add.image(495, 350, "map", "map_snow_2.png");
		map_snow_2_png.scaleX = 0.7806603248159942;
		map_snow_2_png.scaleY = 0.7326584184607683;

		// map_ski_hill_location_png
		const map_ski_hill_location_png = this.add.image(272, 278, "map", "map_ski_hill_location.png");
		map_ski_hill_location_png.scaleX = 0.8313577321913024;
		map_ski_hill_location_png.scaleY = 0.753686274887952;

		// map_beach_left_side_snow_png
		const map_beach_left_side_snow_png = this.add.image(129, 400, "map", "map_beach_left_side_snow.png");
		map_beach_left_side_snow_png.scaleX = 0.8072026707056347;
		map_beach_left_side_snow_png.scaleY = 0.7079816314673097;

		// map_light_house_location_png
		const map_light_house_location_png = this.add.image(67, 446, "map", "map_light_house_location.png");
		map_light_house_location_png.scaleX = 0.8214227332904064;
		map_light_house_location_png.scaleY = 0.7870678261301508;

		// map_puffle_wild_location_png_1
		const map_puffle_wild_location_png_1 = this.add.image(443, 285, "map", "map_puffle_wild_location.png");
		map_puffle_wild_location_png_1.scaleX = 0.7657025147683634;
		map_puffle_wild_location_png_1.scaleY = 0.74347299236153;

		// map_town_location_png
		const map_town_location_png = this.add.image(484, 430, "map", "map_town_location.png");
		map_town_location_png.scaleX = 0.7947375311536272;
		map_town_location_png.scaleY = 0.6766553832294244;

		// map_ski_lodge_location_png
		this.add.image(377, 350, "map", "map_ski_lodge_location.png");

		// map_small_light_overlay_png
		const map_small_light_overlay_png = this.add.image(666, 357, "map", "map_small_light_overlay.png");
		map_small_light_overlay_png.scaleX = 0.9438113920649329;
		map_small_light_overlay_png.scaleY = 0.8844399730969386;
		map_small_light_overlay_png.visible = false;

		// map_own_igloo_location_highlighted0001_png
		const map_own_igloo_location_highlighted0001_png = this.add.image(618, 494, "map", "map_own_igloo_location_highlighted0001.png");
		map_own_igloo_location_highlighted0001_png.scaleX = 0.6629624855358689;
		map_own_igloo_location_highlighted0001_png.scaleY = 0.5755550625012043;
		map_own_igloo_location_highlighted0001_png.visible = false;

		// map_all_igloos_location_highlighted0001_png
		const map_all_igloos_location_highlighted0001_png = this.add.image(514, 550, "map", "map_all_igloos_location_highlighted0001.png");
		map_all_igloos_location_highlighted0001_png.scaleX = 0.7295079502169725;
		map_all_igloos_location_highlighted0001_png.scaleY = 0.6643102064050737;
		map_all_igloos_location_highlighted0001_png.visible = false;

		// map_docks_locationo_highlighted0001_png
		const map_docks_locationo_highlighted0001_png = this.add.image(257, 586, "map", "map_docks_locationo_highlighted0001.png");
		map_docks_locationo_highlighted0001_png.scaleX = 0.7761743158539419;
		map_docks_locationo_highlighted0001_png.scaleY = 0.7786542246389321;
		map_docks_locationo_highlighted0001_png.visible = false;

		// map_dojo_location_highlighted0001_png
		const map_dojo_location_highlighted0001_png = this.add.image(772, 206, "map", "map_dojo_location_highlighted0001.png");
		map_dojo_location_highlighted0001_png.scaleX = 0.7114088544649873;
		map_dojo_location_highlighted0001_png.scaleY = 0.7228319982978202;
		map_dojo_location_highlighted0001_png.visible = false;

		// map_cove_location_highlighted_png
		const map_cove_location_highlighted_png = this.add.image(1179, 485, "map", "map_cove_location_highlighted.png");
		map_cove_location_highlighted_png.scaleX = 0.7491362044377609;
		map_cove_location_highlighted_png.scaleY = 0.6935721524557851;
		map_cove_location_highlighted_png.visible = false;

		// map_forest_location_highlighted0001_png
		const map_forest_location_highlighted0001_png = this.add.image(987, 459, "map", "map_forest_location_highlighted0001.png");
		map_forest_location_highlighted0001_png.scaleX = 0.8952946314619729;
		map_forest_location_highlighted0001_png.scaleY = 0.7295269819833454;
		map_forest_location_highlighted0001_png.visible = false;

		// map_pet_extra_background_png
		const map_pet_extra_background_png = this.add.image(653, 72, "map", "map_pet_extra_background.png");
		map_pet_extra_background_png.scaleX = 0.815404775472208;
		map_pet_extra_background_png.scaleY = 0.8170663837122032;
        map_pet_extra_background_png.visible = false;

		// map_icons_background_png
		const map_icons_background_png = this.add.image(236, 67, "map", "map_icons_background.png");
		map_icons_background_png.scaleX = 0.7232196142075569;
		map_icons_background_png.scaleY = 0.693975555836069;

		// map_icon_places0001_png
		const map_icon_places0001_png = this.add.image(64, 59, "map", "map_icon_places0001.png");
		map_icon_places0001_png.scaleX = 0.7844729760154929;
		map_icon_places0001_png.scaleY = 0.8666764664305704;

		// map_icon_games
		const map_icon_games = this.add.image(171, 59, "map", "map_icon_games0001.png");
		map_icon_games.scaleX = 0.7844729760154929;
		map_icon_games.scaleY = 0.8666764664305704;

		// map_icon_shops
		const map_icon_shops = this.add.image(278, 59, "map", "map_shops_icon0001.png");
		map_icon_shops.scaleX = 0.7844729760154929;
		map_icon_shops.scaleY = 0.8666764664305704;

		// map_icon_pets
		const map_icon_pets = this.add.image(385, 59, "map", "map_pets_icon0001.png");
		map_icon_pets.scaleX = 0.7844729760154929;
		map_icon_pets.scaleY = 0.8666764664305704;

		// map_icon_places0002_png
		const map_icon_places0002_png = this.add.image(64, 59, "map", "map_icon_places0002.png");
		map_icon_places0002_png.scaleX = 0.7844729760154929;
		map_icon_places0002_png.scaleY = 0.8666764664305704;
		map_icon_places0002_png.visible = false;

		// map_icon_games0002_png
		const map_icon_games0002_png = this.add.image(171, 59, "map", "map_icon_games0002.png");
		map_icon_games0002_png.scaleX = 0.7844729760154929;
		map_icon_games0002_png.scaleY = 0.8666764664305704;

		// map_shops_icon0002_png
		const map_shops_icon0002_png = this.add.image(278, 59, "map", "map_shops_icon0002.png");
		map_shops_icon0002_png.scaleX = 0.7844729760154929;
		map_shops_icon0002_png.scaleY = 0.8666764664305704;
		map_shops_icon0002_png.visible = false;

		// map_pets_icon0002_png
		const map_pets_icon0002_png = this.add.image(385, 59, "map", "map_pets_icon0002.png");
		map_pets_icon0002_png.scaleX = 0.7844729760154929;
		map_pets_icon0002_png.scaleY = 0.8666764664305704;

		// map_skate_park_location_highlighted0001_png
		const map_skate_park_location_highlighted0001_png = this.add.image(1153, 367, "map", "map_skate_park_location_highlighted0001.png");
		map_skate_park_location_highlighted0001_png.scaleX = 0.7684160898804323;
		map_skate_park_location_highlighted0001_png.scaleY = 0.7219060360560453;
		map_skate_park_location_highlighted0001_png.visible = false;

		// map_plaza_location_highlighted0001_png
		const map_plaza_location_highlighted0001_png = this.add.image(826, 439, "map", "map_plaza_location_highlighted0001.png");
		map_plaza_location_highlighted0001_png.scaleX = 0.7898309718121495;
		map_plaza_location_highlighted0001_png.scaleY = 0.7497462484690373;
		map_plaza_location_highlighted0001_png.visible = false;

		// map_puffle_park_location_highlighted0001_png
		const map_puffle_park_location_highlighted0001_png = this.add.image(773, 350, "map", "map_puffle_park_location_highlighted0001.png");
		map_puffle_park_location_highlighted0001_png.scaleX = 0.7773179569553047;
		map_puffle_park_location_highlighted0001_png.scaleY = 0.6518216648356877;
		map_puffle_park_location_highlighted0001_png.visible = false;

		// map_snow_forts_location_highlighted0001_png
		const map_snow_forts_location_highlighted0001_png = this.add.image(648, 392, "map", "map_snow_forts_location_highlighted0001.png");
		map_snow_forts_location_highlighted0001_png.scaleX = 0.8834584397584915;
		map_snow_forts_location_highlighted0001_png.scaleY = 0.6809307936149277;
		map_snow_forts_location_highlighted0001_png.visible = false;

		// map_mine_location_highlighted0001_png
		const map_mine_location_highlighted0001_png = this.add.image(983, 350, "map", "map_mine_location_highlighted0001.png");
		map_mine_location_highlighted0001_png.scaleX = 0.6693481811312569;
		map_mine_location_highlighted0001_png.scaleY = 0.6337503089548451;
		map_mine_location_highlighted0001_png.visible = false;

		// map_ski_hill_location_highlighted0001_png
		const map_ski_hill_location_highlighted0001_png = this.add.image(278, 280, "map", "map_ski_hill_location_highlighted0001.png");
		map_ski_hill_location_highlighted0001_png.scaleX = 0.8313577321913024;
		map_ski_hill_location_highlighted0001_png.scaleY = 0.753686274887952;
		map_ski_hill_location_highlighted0001_png.visible = false;

		// map_soccer_stadium_location_highlighted0001_png
		const map_soccer_stadium_location_highlighted0001_png = this.add.image(549, 288, "map", "map_soccer_stadium_location_highlighted0001.png");
		map_soccer_stadium_location_highlighted0001_png.scaleX = 0.8978377703743216;
		map_soccer_stadium_location_highlighted0001_png.scaleY = 0.8115394049923081;
		map_soccer_stadium_location_highlighted0001_png.visible = false;

		// map_exit_button0001_png
		const map_exit_button0001_png = this.add.image(1242, 33, "map", "map_exit_button0001.png");
		map_exit_button0001_png.scaleX = 0.7105170405574622;
		map_exit_button0001_png.scaleY = 0.6474444871140403;

		// map_exit_button0002_png
		const map_exit_button0002_png = this.add.image(1242, 33, "map", "map_exit_button0002.png");
		map_exit_button0002_png.scaleX = 0.7105170405574622;
		map_exit_button0002_png.scaleY = 0.6474444871140403;
		map_exit_button0002_png.visible = false;

		// map_town_location_highlighted0001_png
		const map_town_location_highlighted0001_png = this.add.image(484, 428, "map", "map_town_location_highlighted0001.png");
		map_town_location_highlighted0001_png.scaleX = 0.8375856076367891;
		map_town_location_highlighted0001_png.scaleY = 0.7352407119172146;
		map_town_location_highlighted0001_png.visible = false;

		// map_ski_lodge_location_highlighted0001_png
		const map_ski_lodge_location_highlighted0001_png = this.add.image(375, 353, "map", "map_ski_lodge_location_highlighted0001.png");
		map_ski_lodge_location_highlighted0001_png.scaleX = 0.8457090052012114;
		map_ski_lodge_location_highlighted0001_png.scaleY = 0.8275022843525967;
		map_ski_lodge_location_highlighted0001_png.visible = false;

		// map_puffle_wild_location_highlighted0001_png
		const map_puffle_wild_location_highlighted0001_png = this.add.image(443, 285, "map", "map_puffle_wild_location_highlighted0001.png");
		map_puffle_wild_location_highlighted0001_png.scaleX = 0.7239210492434534;
		map_puffle_wild_location_highlighted0001_png.scaleY = 0.7203030410241014;
		map_puffle_wild_location_highlighted0001_png.visible = false;

		// map_light_house_location_highlighted0001_png
		const map_light_house_location_highlighted0001_png = this.add.image(67, 446, "map", "map_light_house_location_highlighted0001.png");
		map_light_house_location_highlighted0001_png.scaleX = 0.8214227332904064;
		map_light_house_location_highlighted0001_png.scaleY = 0.7870678261301508;
		map_light_house_location_highlighted0001_png.visible = false;

		// map_icon_places0004_png
		const map_icon_places0004_png = this.add.image(64, 59, "map", "map_icon_places0004.png");
		map_icon_places0004_png.scaleX = 0.7844729760154929;
		map_icon_places0004_png.scaleY = 0.8666764664305704;
		map_icon_places0004_png.visible = false;

		// map_icon_games0004_png
		const map_icon_games0004_png = this.add.image(171, 59, "map", "map_icon_games0004.png");
		map_icon_games0004_png.scaleX = 0.7844729760154929;
		map_icon_games0004_png.scaleY = 0.8666764664305704;
		map_icon_games0004_png.visible = false;

		// map_pets_icon0004_png
		const map_pets_icon0004_png = this.add.image(385, 59, "map", "map_pets_icon0004.png");
		map_pets_icon0004_png.scaleX = 0.7844729760154929;
		map_pets_icon0004_png.scaleY = 0.8666764664305704;
		map_pets_icon0004_png.visible = false;

		// map_shops_icon0004_png
		const map_shops_icon0004_png = this.add.image(278, 59, "map", "map_shops_icon0004.png");
		map_shops_icon0004_png.scaleX = 0.7844729760154929;
		map_shops_icon0004_png.scaleY = 0.8666764664305704;
		map_shops_icon0004_png.visible = false;

		// map_games_sled_racing_icon0001_png
		const map_games_sled_racing_icon0001_png = this.add.image(264, 213, "map", "map_games_sled_racing_icon0001.png");
		map_games_sled_racing_icon0001_png.scaleX = 0.7026210471605361;
		map_games_sled_racing_icon0001_png.scaleY = 0.6701671490165645;
		map_games_sled_racing_icon0001_png.visible = false;

		// map_games_ice_fishing_icon_png
		const map_games_ice_fishing_icon_png = this.add.image(308, 326, "map", "map_games_ice_fishing_icon.png");
		map_games_ice_fishing_icon_png.scaleX = 0.7026210471605361;
		map_games_ice_fishing_icon_png.scaleY = 0.6701671490165645;
		map_games_ice_fishing_icon_png.visible = false;

		// map_games_jet_pack_icon
		const map_games_jet_pack_icon = this.add.image(127, 387, "map", "map_games_jet_pack_icon0001.png");
		map_games_jet_pack_icon.scaleX = 0.7026210471605361;
		map_games_jet_pack_icon.scaleY = 0.6701671490165645;
		map_games_jet_pack_icon.visible = false;

		// map_games_hydro_hopper_icon_png
		const map_games_hydro_hopper_icon_png = this.add.image(237, 563, "map", "map_games_hydro_hopper_icon.png");
		map_games_hydro_hopper_icon_png.scaleX = 0.7026210471605361;
		map_games_hydro_hopper_icon_png.scaleY = 0.6701671490165645;
		map_games_hydro_hopper_icon_png.visible = false;

		// map_games_smoothie_smash_icon_png
		const map_games_smoothie_smash_icon_png = this.add.image(365, 475, "map", "map_games_smoothie_smash_icon.png");
		map_games_smoothie_smash_icon_png.scaleX = 0.7026210471605361;
		map_games_smoothie_smash_icon_png.scaleY = 0.6701671490165645;
		map_games_smoothie_smash_icon_png.visible = false;

		// map_games_bean_counter_icon0001_png
		const map_games_bean_counter_icon0001_png = this.add.image(395, 376, "map", "map_games_bean_counter_icon0001.png");
		map_games_bean_counter_icon0001_png.scaleX = 0.7026210471605361;
		map_games_bean_counter_icon0001_png.scaleY = 0.6701671490165645;
		map_games_bean_counter_icon0001_png.visible = false;

		// map_games_astro_barrier_icon0001_png
		const map_games_astro_barrier_icon0001_png = this.add.image(493, 362, "map", "map_games_astro_barrier_icon0001.png");
		map_games_astro_barrier_icon0001_png.scaleX = 0.7026210471605361;
		map_games_astro_barrier_icon0001_png.scaleY = 0.6701671490165645;
		map_games_astro_barrier_icon0001_png.visible = false;

		// map_games_sound_studio_icon_png
		const map_games_sound_studio_icon_png = this.add.image(478, 483, "map", "map_games_sound_studio_icon.png");
		map_games_sound_studio_icon_png.scaleX = 0.7026210471605361;
		map_games_sound_studio_icon_png.scaleY = 0.6701671490165645;
		map_games_sound_studio_icon_png.visible = false;

		// map_games_dance_contest_icon0001_png
		const map_games_dance_contest_icon0001_png = this.add.image(580, 422, "map", "map_games_dance_contest_icon0001.png");
		map_games_dance_contest_icon0001_png.scaleX = 0.7026210471605361;
		map_games_dance_contest_icon0001_png.scaleY = 0.6701671490165645;
		map_games_dance_contest_icon0001_png.visible = false;

		// map_games_puffle_launch_icon_png
		const map_games_puffle_launch_icon_png = this.add.image(700, 404, "map", "map_games_puffle_launch_icon.png");
		map_games_puffle_launch_icon_png.scaleX = 0.7026210471605361;
		map_games_puffle_launch_icon_png.scaleY = 0.6701671490165645;
		map_games_puffle_launch_icon_png.visible = false;

		// map_games_pufflescape_icon_png
		const map_games_pufflescape_icon_png = this.add.image(773, 476, "map", "map_games_pufflescape_icon.png");
		map_games_pufflescape_icon_png.scaleX = 0.7026210471605361;
		map_games_pufflescape_icon_png.scaleY = 0.6701671490165645;
		map_games_pufflescape_icon_png.visible = false;

		// map_games_pizzatron_3000_icon_png
		const map_games_pizzatron_3000_icon_png = this.add.image(910, 439, "map", "map_games_pizzatron_3000_icon.png");
		map_games_pizzatron_3000_icon_png.scaleX = 0.7026210471605361;
		map_games_pizzatron_3000_icon_png.scaleY = 0.6701671490165645;
		map_games_pizzatron_3000_icon_png.visible = false;

		// map_games_cart_surfer_icon_png
		const map_games_cart_surfer_icon_png = this.add.image(1052, 311, "map", "map_games_cart_surfer_icon.png");
		map_games_cart_surfer_icon_png.scaleX = 0.7026210471605361;
		map_games_cart_surfer_icon_png.scaleY = 0.6701671490165645;
		map_games_cart_surfer_icon_png.visible = false;

		// map_games_puffle_rescue_icon_png
		const map_games_puffle_rescue_icon_png = this.add.image(930, 303, "map", "map_games_puffle_rescue_icon.png");
		map_games_puffle_rescue_icon_png.scaleX = 0.7026210471605361;
		map_games_puffle_rescue_icon_png.scaleY = 0.6701671490165645;
		map_games_puffle_rescue_icon_png.visible = false;

		// map_games_card_jistu_icon_png
		const map_games_card_jistu_icon_png = this.add.image(761, 190, "map", "map_games_card_jistu_icon.png");
		map_games_card_jistu_icon_png.scaleX = 0.7026210471605361;
		map_games_card_jistu_icon_png.scaleY = 0.6701671490165645;
		map_games_card_jistu_icon_png.visible = false;

		// map_games_puffle_roundup_icon_png
		const map_games_puffle_roundup_icon_png = this.add.image(779, 303, "map", "map_games_puffle_roundup_icon.png");
		map_games_puffle_roundup_icon_png.scaleX = 0.7026210471605361;
		map_games_puffle_roundup_icon_png.scaleY = 0.6701671490165645;
		map_games_puffle_roundup_icon_png.visible = false;

		// map_games_aqua_grabber_icon_png
		const map_games_aqua_grabber_icon_png = this.add.image(1168, 293, "map", "map_games_aqua_grabber_icon.png");
		map_games_aqua_grabber_icon_png.scaleX = 0.7026210471605361;
		map_games_aqua_grabber_icon_png.scaleY = 0.6701671490165645;
		map_games_aqua_grabber_icon_png.visible = false;

		// map_games_wave_game_icon_png
		const map_games_wave_game_icon_png = this.add.image(1130, 467, "map", "map_games_wave_game_icon.png");
		map_games_wave_game_icon_png.scaleX = 0.7026210471605361;
		map_games_wave_game_icon_png.scaleY = 0.6701671490165645;
		map_games_wave_game_icon_png.visible = false;

		// map_shops_sled_icon_png
		const map_shops_sled_icon_png = this.add.image(283, 250, "map", "map_shops_sled_icon.png");
		map_shops_sled_icon_png.scaleX = 0.7026210471605361;
		map_shops_sled_icon_png.scaleY = 0.6701671490165645;
		map_shops_sled_icon_png.visible = false;

		// map_shops_fishing_rods_icons_png
		const map_shops_fishing_rods_icons_png = this.add.image(342, 355, "map", "map_shops_fishing_rods_icons.png");
		map_shops_fishing_rods_icons_png.scaleX = 0.7026210471605361;
		map_shops_fishing_rods_icons_png.scaleY = 0.6701671490165645;
		map_shops_fishing_rods_icons_png.visible = false;

		// map_shops_hydro_hopper_icon_png
		const map_shops_hydro_hopper_icon_png = this.add.image(280, 549, "map", "map_shops_hydro_hopper_icon.png");
		map_shops_hydro_hopper_icon_png.scaleX = 0.7026210471605361;
		map_shops_hydro_hopper_icon_png.scaleY = 0.6701671490165645;
		map_shops_hydro_hopper_icon_png.visible = false;

		// map_shops_card_jistu_icon_png
		const map_shops_card_jistu_icon_png = this.add.image(760, 207, "map", "map_shops_card_jistu_icon.png");
		map_shops_card_jistu_icon_png.scaleX = 0.7026210471605361;
		map_shops_card_jistu_icon_png.scaleY = 0.6701671490165645;
		map_shops_card_jistu_icon_png.visible = false;

		// map_shops_clothes_icon_png
		const map_shops_clothes_icon_png = this.add.image(550, 429, "map", "map_shops_clothes_icon.png");
		map_shops_clothes_icon_png.scaleX = 0.7026210471605361;
		map_shops_clothes_icon_png.scaleY = 0.6701671490165645;
		map_shops_clothes_icon_png.visible = false;

		// map_shops_music_icon_png
		const map_shops_music_icon_png = this.add.image(134, 476, "map", "map_shops_music_icon.png");
		map_shops_music_icon_png.scaleX = 0.7026210471605361;
		map_shops_music_icon_png.scaleY = 0.6701671490165645;
		map_shops_music_icon_png.visible = false;

		// map_shops_snow_and_sports_icon_png
		const map_shops_snow_and_sports_icon_png = this.add.image(575, 315, "map", "map_shops_snow_and_sports_icon.png");
		map_shops_snow_and_sports_icon_png.scaleX = 0.7026210471605361;
		map_shops_snow_and_sports_icon_png.scaleY = 0.6701671490165645;
		map_shops_snow_and_sports_icon_png.visible = false;

		// map_shops_costume_trunk_icon_png
		const map_shops_costume_trunk_icon_png = this.add.image(906, 433, "map", "map_shops_costume_trunk_icon.png");
		map_shops_costume_trunk_icon_png.scaleX = 0.7026210471605361;
		map_shops_costume_trunk_icon_png.scaleY = 0.6701671490165645;
		map_shops_costume_trunk_icon_png.visible = false;

		// map_shops_pet_icon_png
		const map_shops_pet_icon_png = this.add.image(780, 435, "map", "map_shops_pet_icon.png");
		map_shops_pet_icon_png.scaleX = 0.7026210471605361;
		map_shops_pet_icon_png.scaleY = 0.6701671490165645;
		map_shops_pet_icon_png.visible = false;

		// map_shops_wave_boards_icon_png
		const map_shops_wave_boards_icon_png = this.add.image(1130, 494, "map", "map_shops_wave_boards_icon.png");
		map_shops_wave_boards_icon_png.scaleX = 0.7026210471605361;
		map_shops_wave_boards_icon_png.scaleY = 0.6701671490165645;
		map_shops_wave_boards_icon_png.visible = false;

		// map_pets_puffle_wild_icon_png
		const map_pets_puffle_wild_icon_png = this.add.image(445, 272, "map", "map_pets_puffle_wild_icon.png");
		map_pets_puffle_wild_icon_png.scaleX = 0.7026210471605361;
		map_pets_puffle_wild_icon_png.scaleY = 0.6701671490165645;
		map_pets_puffle_wild_icon_png.visible = false;

		// map_pets_jet_pack_game_icon_png
		const map_pets_jet_pack_game_icon_png = this.add.image(118, 449, "map", "map_pets_jet_pack_game_icon.png");
		map_pets_jet_pack_game_icon_png.scaleX = 0.7026210471605361;
		map_pets_jet_pack_game_icon_png.scaleY = 0.6701671490165645;
		map_pets_jet_pack_game_icon_png.visible = false;

		// map_pets_arcade_icon_png
		const map_pets_arcade_icon_png = this.add.image(499, 374, "map", "map_pets_arcade_icon.png");
		map_pets_arcade_icon_png.scaleX = 0.7026210471605361;
		map_pets_arcade_icon_png.scaleY = 0.6701671490165645;
		map_pets_arcade_icon_png.visible = false;

		// map_pets_cart_surfer_icon_png
		const map_pets_cart_surfer_icon_png = this.add.image(1055, 320, "map", "map_pets_cart_surfer_icon.png");
		map_pets_cart_surfer_icon_png.scaleX = 0.7026210471605361;
		map_pets_cart_surfer_icon_png.scaleY = 0.6701671490165645;
		map_pets_cart_surfer_icon_png.visible = false;

		// map_pets_catching_waves_icon_png
		const map_pets_catching_waves_icon_png = this.add.image(1167, 476, "map", "map_pets_catching_waves_icon.png");
		map_pets_catching_waves_icon_png.scaleX = 0.7026210471605361;
		map_pets_catching_waves_icon_png.scaleY = 0.6701671490165645;
		map_pets_catching_waves_icon_png.visible = false;

		// map_pets_dance_icon_png
		const map_pets_dance_icon_png = this.add.image(472, 483, "map", "map_pets_dance_icon.png");
		map_pets_dance_icon_png.scaleX = 0.7026210471605361;
		map_pets_dance_icon_png.scaleY = 0.6701671490165645;
		map_pets_dance_icon_png.visible = false;

		// map_pets_puffle_care_icon_png
		const map_pets_puffle_care_icon_png = this.add.image(634, 516, "map", "map_pets_puffle_care_icon.png");
		map_pets_puffle_care_icon_png.scaleX = 0.7026210471605361;
		map_pets_puffle_care_icon_png.scaleY = 0.6701671490165645;
		map_pets_puffle_care_icon_png.visible = false;

		// map_pets_puffle_launch_icon_png
		const map_pets_puffle_launch_icon_png = this.add.image(701, 391, "map", "map_pets_puffle_launch_icon.png");
		map_pets_puffle_launch_icon_png.scaleX = 0.7026210471605361;
		map_pets_puffle_launch_icon_png.scaleY = 0.6701671490165645;
		map_pets_puffle_launch_icon_png.visible = false;

		// map_pets_puffle_roundup_icon_png
		const map_pets_puffle_roundup_icon_png = this.add.image(785, 299, "map", "map_pets_puffle_roundup_icon.png");
		map_pets_puffle_roundup_icon_png.scaleX = 0.7026210471605361;
		map_pets_puffle_roundup_icon_png.scaleY = 0.6701671490165645;
		map_pets_puffle_roundup_icon_png.visible = false;

		// map_pets_puffle_rescue_icon_png
		const map_pets_puffle_rescue_icon_png = this.add.image(909, 314, "map", "map_pets_puffle_rescue_icon.png");
		map_pets_puffle_rescue_icon_png.scaleX = 0.7026210471605361;
		map_pets_puffle_rescue_icon_png.scaleY = 0.6701671490165645;
		map_pets_puffle_rescue_icon_png.visible = false;

		// map_pets_rainbow_quest_icon_png
		const map_pets_rainbow_quest_icon_png = this.add.image(897, 391, "map", "map_pets_rainbow_quest_icon.png");
		map_pets_rainbow_quest_icon_png.scaleX = 0.7026210471605361;
		map_pets_rainbow_quest_icon_png.scaleY = 0.6701671490165645;
		map_pets_rainbow_quest_icon_png.visible = false;

		// map_pets_pet_furniture_icon_png
		const map_pets_pet_furniture_icon_png = this.add.image(839, 484, "map", "map_pets_pet_furniture_icon.png");
		map_pets_pet_furniture_icon_png.scaleX = 0.7026210471605361;
		map_pets_pet_furniture_icon_png.scaleY = 0.6701671490165645;
		map_pets_pet_furniture_icon_png.visible = false;

		// map_pets_sound_studio_icon_png
		const map_pets_sound_studio_icon_png = this.add.image(738, 478, "map", "map_pets_sound_studio_icon.png");
		map_pets_sound_studio_icon_png.scaleX = 0.7026210471605361;
		map_pets_sound_studio_icon_png.scaleY = 0.6701671490165645;
		map_pets_sound_studio_icon_png.visible = false;

		// map_pets_aqua_grabber_icon_png
		const map_pets_aqua_grabber_icon_png = this.add.image(1173, 286, "map", "map_pets_aqua_grabber_icon.png");
		map_pets_aqua_grabber_icon_png.scaleX = 0.7026210471605361;
		map_pets_aqua_grabber_icon_png.scaleY = 0.6701671490165645;
		map_pets_aqua_grabber_icon_png.visible = false;

		// map_pets_puffle_adopt_icon0001_png
		const map_pets_puffle_adopt_icon0001_png = this.add.image(800, 388, "map", "map_pets_puffle_adopt_icon0001.png");
		map_pets_puffle_adopt_icon0001_png.scaleX = 0.7026210471605361;
		map_pets_puffle_adopt_icon0001_png.scaleY = 0.6701671490165645;
		map_pets_puffle_adopt_icon0001_png.visible = false;

		// map_pets_blue_puffle_add_on_png
		const map_pets_blue_puffle_add_on_png = this.add.image(558, 74, "map", "map_pets_blue_puffle_add_on.png");
		map_pets_blue_puffle_add_on_png.scaleX = 0.9153773251984484;
		map_pets_blue_puffle_add_on_png.scaleY = 0.8831513063799649;
        map_pets_blue_puffle_add_on_png.visible = false;

		// map_pets_show_games_button_png
		const map_pets_show_games_button_png = this.add.image(707, 97, "map", "map_pets_show_games_button.png");
		map_pets_show_games_button_png.scaleX = 0.5547962750675575;
		map_pets_show_games_button_png.scaleY = 0.8741518375780506;
        map_pets_show_games_button_png.visible = false;

		// map_pets_show_games_button_clicked_png
		const map_pets_show_games_button_clicked_png = this.add.image(707, 97, "map", "map_pets_show_games_button_clicked.png");
		map_pets_show_games_button_clicked_png.scaleX = 0.5547962750675575;
		map_pets_show_games_button_clicked_png.scaleY = 0.8741518375780506;
		map_pets_show_games_button_clicked_png.visible = false;

		// map_pets_show_games_button_hover_png
		const map_pets_show_games_button_hover_png = this.add.image(707, 97, "map", "map_pets_show_games_button_hover.png");
		map_pets_show_games_button_hover_png.scaleX = 0.5547962750675575;
		map_pets_show_games_button_hover_png.scaleY = 0.8741518375780506;
		map_pets_show_games_button_hover_png.visible = false;

        this.map_places_button_text = this.add.text(37, 110, "Places", {
            fontFamily: "cpBurbankSmallBold",
            fontSize: "18px",
            fontStyle: "normal",
            color: "#666666"
        });

        this.map_games_button_text = this.add.text(143, 110, "Games", {
            fontFamily: "cpBurbankSmallBold",
            fontSize: "18px",
            fontStyle: "normal",
            color: "#666666"
        });

        this.map_shops_button_text = this.add.text(253, 110, "Shops", {
            fontFamily: "cpBurbankSmallBold",
            fontSize: "18px",
            fontStyle: "normal",
            color: "#666666"
        });

        this.map_pets_button_text = this.add.text(368, 110, "Pets", {
            fontFamily: "cpBurbankSmallBold",
            fontSize: "18px",
            fontStyle: "normal",
            color: "#666666"
        });

        this.map_pets_favorite_game_play_text = this.add.text(620, 25, "Walk your puffle to its\nfavorite game to play it.", {
            fontFamily: "cpBurbankSmallBold",
            fontSize: "16px",
            fontStyle: "normal",
            color: "#333333",
            align: "center",
            lineSpacing: -2, 
            padding: { top: 1 }  
        });

        this.map_pets_show_games_text = this.add.text(653, 85, "Show Games", {
            fontFamily: "cpBurbankSmallBold",
            fontSize: "18px",
            fontStyle: "normal",
            color: "#00475b",
            align: "center",
            lineSpacing: -2, 
            padding: { top: 1 },
        });

        this.map_pets_favorite_game_play_text.visible = false;
        this.map_pets_show_games_text.visible = false

        // Setting instances starts here
        this.map_own_igloo_location_highlighted0001_png = map_own_igloo_location_highlighted0001_png;
		this.map_all_igloos_location_highlighted0001_png = map_all_igloos_location_highlighted0001_png;
		this.map_docks_locationo_highlighted0001_png = map_docks_locationo_highlighted0001_png;
		this.map_dojo_location_highlighted0001_png = map_dojo_location_highlighted0001_png;
		this.map_cove_location_highlighted_png = map_cove_location_highlighted_png;
		this.map_forest_location_highlighted0001_png = map_forest_location_highlighted0001_png;
		this.map_skate_park_location_highlighted0001_png = map_skate_park_location_highlighted0001_png;
		this.map_plaza_location_highlighted0001_png = map_plaza_location_highlighted0001_png;
		this.map_puffle_park_location_highlighted0001_png = map_puffle_park_location_highlighted0001_png;
		this.map_snow_forts_location_highlighted0001_png = map_snow_forts_location_highlighted0001_png;
		this.map_mine_location_highlighted0001_png = map_mine_location_highlighted0001_png;
		this.map_ski_hill_location_highlighted0001_png = map_ski_hill_location_highlighted0001_png;
		this.map_soccer_stadium_location_highlighted0001_png = map_soccer_stadium_location_highlighted0001_png;
		this.map_town_location_highlighted0001_png = map_town_location_highlighted0001_png;
		this.map_ski_lodge_location_highlighted0001_png = map_ski_lodge_location_highlighted0001_png;
		this.map_puffle_wild_location_highlighted0001_png = map_puffle_wild_location_highlighted0001_png;
		this.map_light_house_location_highlighted0001_png = map_light_house_location_highlighted0001_png;
		this.map_games_sled_racing_icon0001_png = map_games_sled_racing_icon0001_png;
		this.map_games_ice_fishing_icon_png = map_games_ice_fishing_icon_png;
		this.map_games_jet_pack_icon = map_games_jet_pack_icon;
		this.map_games_hydro_hopper_icon_png = map_games_hydro_hopper_icon_png;
		this.map_games_smoothie_smash_icon_png = map_games_smoothie_smash_icon_png;
		this.map_games_bean_counter_icon0001_png = map_games_bean_counter_icon0001_png;
		this.map_games_astro_barrier_icon0001_png = map_games_astro_barrier_icon0001_png;
		this.map_games_sound_studio_icon_png = map_games_sound_studio_icon_png;
		this.map_games_dance_contest_icon0001_png = map_games_dance_contest_icon0001_png;
		this.map_games_puffle_launch_icon_png = map_games_puffle_launch_icon_png;
		this.map_games_pufflescape_icon_png = map_games_pufflescape_icon_png;
		this.map_games_pizzatron_3000_icon_png = map_games_pizzatron_3000_icon_png;
		this.map_games_cart_surfer_icon_png = map_games_cart_surfer_icon_png;
		this.map_games_puffle_rescue_icon_png = map_games_puffle_rescue_icon_png;
		this.map_games_card_jistu_icon_png = map_games_card_jistu_icon_png;
		this.map_games_puffle_roundup_icon_png = map_games_puffle_roundup_icon_png;
		this.map_games_aqua_grabber_icon_png = map_games_aqua_grabber_icon_png;
		this.map_games_wave_game_icon_png = map_games_wave_game_icon_png;
		this.map_shops_sled_icon_png = map_shops_sled_icon_png;
		this.map_shops_fishing_rods_icons_png = map_shops_fishing_rods_icons_png;
		this.map_shops_hydro_hopper_icon_png = map_shops_hydro_hopper_icon_png;
		this.map_shops_card_jistu_icon_png = map_shops_card_jistu_icon_png;
		this.map_shops_clothes_icon_png = map_shops_clothes_icon_png;
		this.map_shops_music_icon_png = map_shops_music_icon_png;
		this.map_shops_snow_and_sports_icon_png = map_shops_snow_and_sports_icon_png;
		this.map_shops_costume_trunk_icon_png = map_shops_costume_trunk_icon_png;
		this.map_shops_pet_icon_png = map_shops_pet_icon_png;
		this.map_shops_wave_boards_icon_png = map_shops_wave_boards_icon_png;
		this.map_pets_puffle_wild_icon_png = map_pets_puffle_wild_icon_png;
		this.map_pets_jet_pack_game_icon_png = map_pets_jet_pack_game_icon_png;
		this.map_pets_arcade_icon_png = map_pets_arcade_icon_png;
		this.map_pets_cart_surfer_icon_png = map_pets_cart_surfer_icon_png;
		this.map_pets_catching_waves_icon_png = map_pets_catching_waves_icon_png;
		this.map_pets_dance_icon_png = map_pets_dance_icon_png;
		this.map_pets_puffle_care_icon_png = map_pets_puffle_care_icon_png;
		this.map_pets_puffle_launch_icon_png = map_pets_puffle_launch_icon_png;
		this.map_pets_puffle_roundup_icon_png = map_pets_puffle_roundup_icon_png;
		this.map_pets_puffle_rescue_icon_png = map_pets_puffle_rescue_icon_png;
		this.map_pets_rainbow_quest_icon_png = map_pets_rainbow_quest_icon_png;
		this.map_pets_pet_furniture_icon_png = map_pets_pet_furniture_icon_png;
		this.map_pets_sound_studio_icon_png = map_pets_sound_studio_icon_png;
        this.map_pets_aqua_grabber_icon_png = map_pets_aqua_grabber_icon_png;
        this.map_pets_puffle_adopt_icon0001_png = map_pets_puffle_adopt_icon0001_png;
        // Setting instances ends here

        // Other stuff starts here
        this.places.push(this.map_own_igloo_location_highlighted0001_png);
        this.places.push(this.map_all_igloos_location_highlighted0001_png);
        this.places.push(this.map_docks_locationo_highlighted0001_png);
        this.places.push(this.map_dojo_location_highlighted0001_png);
        this.places.push(this.map_cove_location_highlighted_png);
        this.places.push(this.map_forest_location_highlighted0001_png);
        this.places.push(this.map_skate_park_location_highlighted0001_png);
        this.places.push(this.map_plaza_location_highlighted0001_png);
        this.places.push(this.map_puffle_park_location_highlighted0001_png);
        this.places.push(this.map_snow_forts_location_highlighted0001_png);
        this.places.push(this.map_mine_location_highlighted0001_png);
        this.places.push(this.map_ski_hill_location_highlighted0001_png);
        this.places.push(this.map_soccer_stadium_location_highlighted0001_png);
        this.places.push(this.map_town_location_highlighted0001_png);
        this.places.push(this.map_ski_lodge_location_highlighted0001_png);
        this.places.push(this.map_puffle_wild_location_highlighted0001_png);
        this.places.push(this.map_light_house_location_highlighted0001_png);
        this.places.push(map_icon_places0004_png);

        this.games.push(this.map_games_sled_racing_icon0001_png);
        this.games.push(this.map_games_ice_fishing_icon_png);
        this.games.push(this.map_games_jet_pack_icon);
        this.games.push(this.map_games_hydro_hopper_icon_png);
        this.games.push(this.map_games_smoothie_smash_icon_png);
        this.games.push(this.map_games_bean_counter_icon0001_png);
        this.games.push(this.map_games_astro_barrier_icon0001_png);
        this.games.push(this.map_games_sound_studio_icon_png);
        this.games.push(this.map_games_dance_contest_icon0001_png);
        this.games.push(this.map_games_puffle_launch_icon_png);
        this.games.push(this.map_games_pufflescape_icon_png);
        this.games.push(this.map_games_pizzatron_3000_icon_png);
        this.games.push(this.map_games_cart_surfer_icon_png);
        this.games.push(this.map_games_puffle_rescue_icon_png);
        this.games.push(this.map_games_card_jistu_icon_png);
        this.games.push(this.map_games_puffle_roundup_icon_png);
        this.games.push(this.map_games_aqua_grabber_icon_png);
        this.games.push(this.map_games_wave_game_icon_png);
        this.games.push(map_icon_games0004_png);

        this.shops.push(this.map_shops_sled_icon_png);
        this.shops.push(this.map_shops_fishing_rods_icons_png);
        this.shops.push(this.map_shops_hydro_hopper_icon_png);
        this.shops.push(this.map_shops_card_jistu_icon_png);
        this.shops.push(this.map_shops_clothes_icon_png);
        this.shops.push(this.map_shops_music_icon_png);
        this.shops.push(this.map_shops_snow_and_sports_icon_png);
        this.shops.push(this.map_shops_costume_trunk_icon_png);
        this.shops.push(this.map_shops_pet_icon_png);
        this.shops.push(this.map_shops_wave_boards_icon_png);
        this.shops.push(map_shops_icon0004_png);

        this.pets.push(this.map_pets_puffle_wild_icon_png);
        this.pets.push(this.map_pets_arcade_icon_png);
        this.pets.push(this.map_pets_puffle_care_icon_png);
        this.pets.push(this.map_pets_puffle_launch_icon_png);
        this.pets.push(this.map_pets_puffle_roundup_icon_png);
        this.pets.push(this.map_pets_puffle_rescue_icon_png);
        this.pets.push(this.map_pets_pet_furniture_icon_png);
        this.pets.push(this.map_pets_rainbow_quest_icon_png);
        this.pets.push(this.map_pets_sound_studio_icon_png);
        this.pets.push(this.map_pets_puffle_adopt_icon0001_png);
        this.pets.push(map_pets_icon0004_png);
        this.pets.push(map_pets_blue_puffle_add_on_png);
        this.pets.push(map_pets_show_games_button_png);
        this.pets.push(map_pet_extra_background_png);
        this.pets.push(this.map_pets_favorite_game_play_text);
        this.pets.push(this.map_pets_show_games_text);

        this.petGames.push(this.map_pets_jet_pack_game_icon_png);
        this.petGames.push(this.map_pets_dance_icon_png);
        this.petGames.push(this.map_pets_cart_surfer_icon_png);
        this.petGames.push(this.map_pets_catching_waves_icon_png);
        this.petGames.push(this.map_games_aqua_grabber_icon_png);
        this.petGames.push(this.map_pets_aqua_grabber_icon_png);
        // Other stuff ends here

        // Setting all interactives sprites starts here
        map_icon_places0001_png.setInteractive({ useHandCursor: true });
        map_icon_places0002_png.setInteractive({ useHandCursor: true });
        map_icon_places0004_png.setInteractive({ useHandCursor: true });
        map_icon_games.setInteractive({ useHandCursor: true });
        map_icon_games0002_png.setInteractive({ useHandCursor: true });
        map_icon_shops.setInteractive({ useHandCursor: true });
        map_shops_icon0002_png.setInteractive({ useHandCursor: true });
        map_icon_pets.setInteractive({ useHandCursor: true });
        map_pets_icon0002_png.setInteractive({ useHandCursor: true });
        map_own_igloo_location_png.setInteractive({ useHandCursor: true });
        this.map_own_igloo_location_highlighted0001_png.setInteractive({ useHandCursor: true });
        map_all_igloos_location_png.setInteractive({ useHandCursor: true });
        map_docks_locationo_png.setInteractive({ useHandCursor: true });
        this.map_all_igloos_location_highlighted0001_png.setInteractive({ useHandCursor: true });
        this.map_docks_locationo_highlighted0001_png.setInteractive({ useHandCursor: true });
        map_cove_location_png.setInteractive({ useHandCursor: true });
        this.map_cove_location_highlighted_png.setInteractive({ useHandCursor: true });
        map_ice_berg_location_png.setInteractive({ useHandCursor: true });
        map_dojo_location_png.setInteractive({ useHandCursor: true });
        this.map_dojo_location_highlighted0001_png.setInteractive({ useHandCursor: true });
        map_forest_location_png.setInteractive({ useHandCursor: true });
        this.map_forest_location_highlighted0001_png.setInteractive({ useHandCursor: true });
        map_exit_button0001_png.setInteractive({ useHandCursor: true });
        map_exit_button0002_png.setInteractive({ useHandCursor: true });
        this.map_light_house_location_highlighted0001_png.setInteractive({ useHandCursor: true });
        this.map_puffle_wild_location_highlighted0001_png.setInteractive({ useHandCursor: true });
        this.map_ski_lodge_location_highlighted0001_png.setInteractive({ useHandCursor: true });
        this.map_town_location_highlighted0001_png.setInteractive({ useHandCursor: true });
        this.map_soccer_stadium_location_highlighted0001_png.setInteractive({ useHandCursor: true });
        this.map_ski_hill_location_highlighted0001_png.setInteractive({ useHandCursor: true });
        this.map_mine_location_highlighted0001_png.setInteractive({ useHandCursor: true });
        this.map_snow_forts_location_highlighted0001_png.setInteractive({ useHandCursor: true });
        this.map_puffle_park_location_highlighted0001_png.setInteractive({ useHandCursor: true });
        this.map_plaza_location_highlighted0001_png.setInteractive({ useHandCursor: true });
        this.map_skate_park_location_highlighted0001_png.setInteractive({ useHandCursor: true });
        this.map_forest_location_highlighted0001_png.setInteractive({ useHandCursor: true });
        this.map_cove_location_highlighted_png.setInteractive({ useHandCursor: true });
        this.map_dojo_location_highlighted0001_png.setInteractive({ useHandCursor: true });
        this.map_docks_locationo_highlighted0001_png.setInteractive({ useHandCursor: true });
        this.map_all_igloos_location_highlighted0001_png.setInteractive({ useHandCursor: true });
        this.map_own_igloo_location_highlighted0001_png.setInteractive({ useHandCursor: true });
        this.map_games_sled_racing_icon0001_png.setInteractive({ useHandCursor: true });
        this.map_games_ice_fishing_icon_png.setInteractive({ useHandCursor: true });
        this.map_games_jet_pack_icon.setInteractive({ useHandCursor: true });
        this.map_games_hydro_hopper_icon_png.setInteractive({ useHandCursor: true });
        this.map_games_smoothie_smash_icon_png.setInteractive({ useHandCursor: true });
        this.map_games_bean_counter_icon0001_png.setInteractive({ useHandCursor: true });
        this.map_games_astro_barrier_icon0001_png.setInteractive({ useHandCursor: true });
        this.map_games_dance_contest_icon0001_png.setInteractive({ useHandCursor: true });
        this.map_games_sound_studio_icon_png.setInteractive({ useHandCursor: true });
        this.map_games_puffle_launch_icon_png.setInteractive({ useHandCursor: true });
        this.map_games_pufflescape_icon_png.setInteractive({ useHandCursor: true });
        this.map_games_pizzatron_3000_icon_png.setInteractive({ useHandCursor: true });
        this.map_games_cart_surfer_icon_png.setInteractive({ useHandCursor: true });
        this.map_games_puffle_rescue_icon_png.setInteractive({ useHandCursor: true });
        this.map_games_card_jistu_icon_png.setInteractive({ useHandCursor: true });
        this.map_games_puffle_roundup_icon_png.setInteractive({ useHandCursor: true });
        this.map_games_aqua_grabber_icon_png.setInteractive({ useHandCursor: true });
        this.map_games_wave_game_icon_png.setInteractive({ useHandCursor: true });
        this.map_shops_sled_icon_png.setInteractive({ useHandCursor: true });
        this.map_shops_fishing_rods_icons_png.setInteractive({ useHandCursor: true });
        this.map_shops_hydro_hopper_icon_png.setInteractive({ useHandCursor: true });
        this.map_shops_card_jistu_icon_png.setInteractive({ useHandCursor: true });
        this.map_shops_clothes_icon_png.setInteractive({ useHandCursor: true });
        this.map_shops_music_icon_png.setInteractive({ useHandCursor: true });
        this.map_shops_snow_and_sports_icon_png.setInteractive({ useHandCursor: true });
        this.map_shops_costume_trunk_icon_png.setInteractive({ useHandCursor: true });
        this.map_shops_pet_icon_png.setInteractive({ useHandCursor: true });
        this.map_shops_wave_boards_icon_png.setInteractive({ useHandCursor: true });
        this.map_pets_puffle_wild_icon_png.setInteractive({ useHandCursor: true });
        this.map_pets_jet_pack_game_icon_png.setInteractive({ useHandCursor: true });
        this.map_pets_arcade_icon_png.setInteractive({ useHandCursor: true });
        this.map_pets_cart_surfer_icon_png.setInteractive({ useHandCursor: true });
        this.map_pets_catching_waves_icon_png.setInteractive({ useHandCursor: true });
        this.map_pets_dance_icon_png.setInteractive({ useHandCursor: true });
        this.map_pets_puffle_care_icon_png.setInteractive({ useHandCursor: true });
        this.map_pets_puffle_launch_icon_png.setInteractive({ useHandCursor: true });
        this.map_pets_puffle_roundup_icon_png.setInteractive({ useHandCursor: true });
        this.map_pets_puffle_rescue_icon_png.setInteractive({ useHandCursor: true });
        this.map_pets_rainbow_quest_icon_png.setInteractive({ useHandCursor: true });
        this.map_pets_pet_furniture_icon_png.setInteractive({ useHandCursor: true });
        this.map_pets_sound_studio_icon_png.setInteractive({ useHandCursor: true });
        map_shops_icon0004_png.setInteractive({ useHandCursor: true });
        map_icon_games0004_png.setInteractive({ useHandCursor: true });
        map_pets_icon0004_png.setInteractive({ useHandCursor: true });
        map_pets_show_games_button_png.setInteractive({ useHandCursor: true });
        map_pets_show_games_button_hover_png.setInteractive({ useHandCursor: true });
        this.map_pets_puffle_adopt_icon0001_png.setInteractive({ useHandCursor: true });
        map_pets_show_games_button_clicked_png.setInteractive({ useHandCursor: true });
        // Setting all interactives sprites ends here

        // All interactive events start here
        map_icon_places0001_png.on("pointerover", () => {
            map_icon_places0001_png.visible = false;
            map_icon_places0002_png.visible = true;
        });

        map_icon_places0002_png.on("pointerout", () => {
            map_icon_places0001_png.visible = true;
            map_icon_places0002_png.visible = false;
        });

        map_icon_places0002_png.on("pointerdown", () => {
            map_small_light_overlay_png.visible = true;
            map_icon_places0001_png.visible = false;
            map_icon_places0004_png.visible = true;

            switchMenu(this, this.places);
        });

        map_icon_places0004_png.on("pointerdown", () => {
            map_small_light_overlay_png.visible = false;
            map_icon_places0001_png.visible = true;
            map_icon_places0004_png.visible = false;
            
            exitMenu(this, this.places);
        });

        map_icon_games.on("pointerover", () => {
            map_icon_games.visible = false;
            map_icon_games0002_png.visible = true;
        });

        map_icon_games0002_png.on("pointerout", () => {
            map_icon_games.visible = true;
            map_icon_games0002_png.visible = false;
        });

        map_icon_games0002_png.on("pointerdown", () => {
            map_small_light_overlay_png.visible = true;
            map_icon_games.visible = false;
            map_icon_games0004_png.visible = true;

            switchMenu(this, this.games);
        });

        map_icon_games0004_png.on("pointerdown", () => {
            map_small_light_overlay_png.visible = false;
            map_icon_games.visible = true;
            map_icon_games0004_png.visible = false;

            exitMenu(this, this.games);
        }); 

        map_icon_shops.on("pointerover", () => {
            map_icon_shops.visible = false;
            map_shops_icon0002_png.visible = true;
        });

        map_shops_icon0002_png.on("pointerout", () => {
            map_icon_shops.visible = true;
            map_shops_icon0002_png.visible = false;
        });

        map_shops_icon0002_png.on("pointerdown", () => {
            map_small_light_overlay_png.visible = true;
            map_shops_icon0002_png.visible = false;
            map_shops_icon0004_png.visible = true;

           switchMenu(this, this.shops);
        });

        map_shops_icon0004_png.on("pointerdown", () => {
            map_small_light_overlay_png.visible = false;
            map_shops_icon0002_png.visible = true;
            map_shops_icon0004_png.visible = false;

            exitMenu(this, this.shops);
        });

        map_icon_pets.on("pointerover", () => {
            map_icon_pets.visible = false;
            map_pets_icon0002_png.visible = true;
        });

        map_pets_icon0002_png.on("pointerout", () => {
            map_icon_pets.visible = true;
            map_pets_icon0002_png.visible = false;
        });

        map_pets_icon0002_png.on("pointerdown", () => {
            map_small_light_overlay_png.visible = true;
            map_pets_icon0002_png.visible = false;
            map_pets_icon0004_png.visible = true;

            switchMenu(this, this.pets);
        });

        map_pets_icon0004_png.on("pointerdown", () => {
            map_small_light_overlay_png.visible = false;
            map_pets_icon0002_png.visible = true;
            map_pets_icon0004_png.visible = false;
            map_pets_blue_puffle_add_on_png.visible = false;
            map_pets_show_games_button_png.visible = false;
            map_pet_extra_background_png.visible = false;

            exitMenu(this, this.pets);
        });

        map_exit_button0001_png.on("pointerover", () => {
            map_exit_button0001_png.visible = false;
            map_exit_button0002_png.visible = true;
        });

        map_exit_button0002_png.on("pointerout", () => {
            map_exit_button0001_png.visible = true;
            map_exit_button0002_png.visible = false;
        });

        map_exit_button0002_png.on("pointerdown", () => {
            // close scene
        });

        map_pets_show_games_button_png.on("pointerover", () => {
            map_pets_show_games_button_png.visible = false;
            map_pets_show_games_button_hover_png.visible = true;
        });

        map_pets_show_games_button_hover_png.on("pointerout", () => {
            map_pets_show_games_button_png.visible = true;
            map_pets_show_games_button_hover_png.visible = false;
        });

        map_pets_show_games_button_hover_png.on("pointerdown", () => {
            map_pets_show_games_button_hover_png.visible = false;
            map_pets_show_games_button_clicked_png.visible = true;

            // This is a addon to the original pet one so we this call jsut manually
            if(this.petGamesVisible) {
                for(const petGames of this.petGames) {
                    petGames.visible = false;
                }

                this.petGamesVisible = false;

                const menuIndex = this.extraMenus.findIndex(menu => menu === this.petGames);
                this.extraMenus.splice(menuIndex, 1);

                return;
            }

            for(const petGames of this.petGames) {
                petGames.visible = true;
            }

            this.petGamesVisible = true;
            this.extraMenus.push(this.petGames);
        });

        map_pets_show_games_button_clicked_png.on("pointerup", () => {
            map_pets_show_games_button_hover_png.visible = true;
            map_pets_show_games_button_clicked_png.visible = false;
        });
        // All interactive events end here
    }   
}