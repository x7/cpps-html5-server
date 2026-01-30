import { BaseScene } from "../baseScene";
import { ASSET_TYPES } from "../../assets/assetTypes";
import { exitMenu, switchMenu } from "./mapHelper";
import { SCENE_MAP } from "../sceneNames";

export class MapScene extends BaseScene {
    constructor() {
        super(SCENE_MAP);
    }

    init(data = {}) {
		super.init(data);
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
		const map_main_background_png = this.add.image(-5, -2, "map", "map_main_background.png");
		map_main_background_png.scaleX = 0.9791972839735081;
		map_main_background_png.scaleY = 0.9658003732399374;
		map_main_background_png.setOrigin(0, 0);

		// map_outer_overlay_png
		const map_outer_overlay_png = this.add.image(762, 484, "map", "map_outer_overlay.png");
		map_outer_overlay_png.scaleX = 1.011144287040757;
		map_outer_overlay_png.scaleY = 1.0090434040935645;

		// map_inner_layer_png
		const map_inner_layer_png = this.add.image(766, 579, "map", "map_inner_layer.png");
		map_inner_layer_png.scaleX = 0.9813211270272462;
		map_inner_layer_png.scaleY = 0.9565581376920999;

		// map_above_town_snow_png
		const map_above_town_snow_png = this.add.image(570, 527, "map", "map_above_town_snow.png");
		map_above_town_snow_png.scaleX = 0.9587914757471104;
		map_above_town_snow_png.scaleY = 0.955167833714723;

		// map_snow_1_png
		const map_snow_1_png = this.add.image(507, 434, "map", "map_snow_1.png");
		map_snow_1_png.scaleX = 1.2737493159753857;
		map_snow_1_png.scaleY = 1.0921153107181365;

		// map_soccer_stadium_location_png
		const map_soccer_stadium_location_png = this.add.image(663, 401, "map", "map_soccer_stadium_location.png");
		map_soccer_stadium_location_png.scaleX = 1.0550490399372543;
		map_soccer_stadium_location_png.scaleY = 0.9814307080535403;

		// map_own_igloo_location_png
		const map_own_igloo_location_png = this.add.image(739, 657, "map", "map_own_igloo_location.png");
		map_own_igloo_location_png.scaleX = 1.3242539776405662;
		map_own_igloo_location_png.scaleY = 1.1792644156528431;

		// map_ice_berg_location_png
		const map_ice_berg_location_png = this.add.image(1421, 424, "map", "map_ice_berg_location.png");
		map_ice_berg_location_png.scaleX = 0.9644740224602029;
		map_ice_berg_location_png.scaleY = 0.8142159665430254;

		// map_all_igloos_location_png
		const map_all_igloos_location_png = this.add.image(616, 733, "map", "map_all_igloos_location.png");
		map_all_igloos_location_png.scaleX = 0.9119114799315041;
		map_all_igloos_location_png.scaleY = 0.9013430546343791;

		// map_docks_locationo_png
		const map_docks_locationo_png = this.add.image(312, 787, "map", "map_docks_locationo.png");
		map_docks_locationo_png.scaleX = 1.0395459808273395;
		map_docks_locationo_png.scaleY = 1.0493906533220425;

		// map_cove_location_png
		const map_cove_location_png = this.add.image(1405, 644, "map", "map_cove_location.png");
		map_cove_location_png.scaleX = 0.9277985707204581;
		map_cove_location_png.scaleY = 1.0044877079848797;

		// map_forest_location_png
		const map_forest_location_png = this.add.image(1173, 616, "map", "map_forest_location.png");
		map_forest_location_png.scaleX = 1.002255391850851;
		map_forest_location_png.scaleY = 0.9577346356558257;

		// map_skate_park_location_png
		const map_skate_park_location_png = this.add.image(1370, 489, "map", "map_skate_park_location.png");
		map_skate_park_location_png.scaleX = 0.9763725513925188;
		map_skate_park_location_png.scaleY = 1.0570701214487792;

		// map_plaza_location_png
		const map_plaza_location_png = this.add.image(984, 584, "map", "map_plaza_location.png");
		map_plaza_location_png.scaleX = 1.0053035371275016;
		map_plaza_location_png.scaleY = 0.9972310485490604;
		map_plaza_location_png.angle = 3;

		// map_puffle_park_location_png
		const map_puffle_park_location_png = this.add.image(920, 463, "map", "map_puffle_park_location.png");
		map_puffle_park_location_png.scaleX = 0.8624450976759005;
		map_puffle_park_location_png.scaleY = 0.9966738343046978;

		// map_snow_forts_location_png
		const map_snow_forts_location_png = this.add.image(773, 527, "map", "map_snow_forts_location.png");
		map_snow_forts_location_png.scaleX = 0.9633820260234063;
		map_snow_forts_location_png.scaleY = 1.0201452796681165;

		// map_mine_location_png
		const map_mine_location_png = this.add.image(1172, 476, "map", "map_mine_location.png");
		map_mine_location_png.scaleX = 0.9293089009699141;
		map_mine_location_png.scaleY = 0.967634195189301;

		// map_snow_2_png
		const map_snow_2_png = this.add.image(581, 472, "map", "map_snow_2.png");
		map_snow_2_png.scaleX = 0.978669646635061;
		map_snow_2_png.scaleY = 0.9411657666359365;

		// map_ski_hill_location_png
		const map_ski_hill_location_png = this.add.image(324, 358, "map", "map_ski_hill_location.png");
		map_ski_hill_location_png.scaleX = 0.985158716152301;
		map_ski_hill_location_png.scaleY = 1.083710928731672;

		// map_ski_hill_location_highlighted0001_png
		const map_ski_hill_location_highlighted0001_png = this.add.image(331, 352, "map", "map_ski_hill_location_highlighted0001.png");
		map_ski_hill_location_highlighted0001_png.scaleX = 0.9579198168814529;
		map_ski_hill_location_highlighted0001_png.scaleY = 1.0866676492560146;
		map_ski_hill_location_highlighted0001_png.visible = false;

		// map_beach_left_side_snow_png
		const map_beach_left_side_snow_png = this.add.image(161, 532, "map", "map_beach_left_side_snow.png");
		map_beach_left_side_snow_png.scaleX = 0.9340858193988333;
		map_beach_left_side_snow_png.scaleY = 0.9975337627328087;

		// map_light_house_location_png
		const map_light_house_location_png = this.add.image(85, 606, "map", "map_light_house_location.png");
		map_light_house_location_png.scaleX = 1.0461672174069334;
		map_light_house_location_png.scaleY = 0.9415915228578962;

		// map_puffle_wild_location_png_1
		const map_puffle_wild_location_png_1 = this.add.image(529, 384, "map", "map_puffle_wild_location.png");
		map_puffle_wild_location_png_1.scaleX = 0.9127274554052986;
		map_puffle_wild_location_png_1.scaleY = 1.0768075593716713;

		// map_town_location_png
		const map_town_location_png = this.add.image(579, 567, "map", "map_town_location.png");
		map_town_location_png.scaleX = 0.9665154437006982;
		map_town_location_png.scaleY = 1.062785697595344;

		// map_ski_lodge_location_png
		const map_ski_lodge_location_png = this.add.image(456, 472, "map", "map_ski_lodge_location.png");
		map_ski_lodge_location_png.scaleX = 1.1964169728717702;
		map_ski_lodge_location_png.scaleY = 1.2055165803441235;

		// map_dojo_location_png
		const map_dojo_location_png = this.add.image(917, 280, "map", "map_dojo_location.png");
		map_dojo_location_png.scaleX = 0.8798872093633356;
		map_dojo_location_png.scaleY = 0.906587543838325;

		// map_small_light_overlay_png
		const map_small_light_overlay_png = this.add.image(762, 466, "map", "map_small_light_overlay.png");
		map_small_light_overlay_png.scaleX = 1.1191142188617338;
		map_small_light_overlay_png.scaleY = 1.1194007799334584;
		map_small_light_overlay_png.visible = false;

		// map_own_igloo_location_highlighted0001_png
		const map_own_igloo_location_highlighted0001_png = this.add.image(749, 658, "map", "map_own_igloo_location_highlighted0001.png");
		map_own_igloo_location_highlighted0001_png.scaleX = 0.9850422974066269;
		map_own_igloo_location_highlighted0001_png.scaleY = 0.9130120559987681;
		map_own_igloo_location_highlighted0001_png.visible = false;

		// map_all_igloos_location_highlighted0001_png
		const map_all_igloos_location_highlighted0001_png = this.add.image(617, 730, "map", "map_all_igloos_location_highlighted0001.png");
		map_all_igloos_location_highlighted0001_png.scaleX = 0.8683723136682474;
		map_all_igloos_location_highlighted0001_png.scaleY = 0.8840925664660955;
		map_all_igloos_location_highlighted0001_png.visible = false;

		// map_docks_locationo_highlighted0001_png
		const map_docks_locationo_highlighted0001_png = this.add.image(310, 787, "map", "map_docks_locationo_highlighted0001.png");
		map_docks_locationo_highlighted0001_png.scaleX = 1.0469506168453089;
		map_docks_locationo_highlighted0001_png.scaleY = 0.9670694196927437;
		map_docks_locationo_highlighted0001_png.visible = false;

		// map_cove_location_highlighted_png
		const map_cove_location_highlighted_png = this.add.image(1405, 646, "map", "map_cove_location_highlighted.png");
		map_cove_location_highlighted_png.scaleX = 0.8703270594194163;
		map_cove_location_highlighted_png.scaleY = 0.8888770085309804;
		map_cove_location_highlighted_png.visible = false;

		// map_forest_location_highlighted0001_png
		const map_forest_location_highlighted0001_png = this.add.image(1172, 616, "map", "map_forest_location_highlighted0001.png");
		map_forest_location_highlighted0001_png.scaleX = 0.9687486617351719;
		map_forest_location_highlighted0001_png.scaleY = 0.8605967904720493;
		map_forest_location_highlighted0001_png.visible = false;

		// map_pet_extra_background_png
		const map_pet_extra_background_png = this.add.image(668, 86, "map", "map_pet_extra_background.png");
		map_pet_extra_background_png.scaleX = 0.8421067045197226;
		map_pet_extra_background_png.scaleY = 0.83243473082154;
		map_pet_extra_background_png.visible = false;

		// map_icons_background_png
		const map_icons_background_png = this.add.image(249, 92, "map", "map_icons_background.png");
		map_icons_background_png.scaleX = 0.717880462652352;
		map_icons_background_png.scaleY = 0.7223453515448386;

		// map_icon_places0001_png
		const map_icon_places0001_png = this.add.image(66, 72, "map", "map_icon_places0001.png");
		map_icon_places0001_png.scaleX = 0.9420092065941514;
		map_icon_places0001_png.scaleY = 0.8928967974021816;

		// map_icon_games
		const map_icon_games = this.add.image(184, 72, "map", "map_icon_games0001.png");
		map_icon_games.scaleX = 0.9420092065941514;
		map_icon_games.scaleY = 0.8928967974021816;

		// map_icon_shops
		const map_icon_shops = this.add.image(302, 72, "map", "map_shops_icon0001.png");
		map_icon_shops.scaleX = 0.9420092065941514;
		map_icon_shops.scaleY = 0.8928967974021816;

		// map_icon_pets
		const map_icon_pets = this.add.image(422, 72, "map", "map_pets_icon0001.png");
		map_icon_pets.scaleX = 0.9420092065941514;
		map_icon_pets.scaleY = 0.8928967974021816;

		// map_icon_places0002_png
		const map_icon_places0002_png = this.add.image(66, 72, "map", "map_icon_places0002.png");
		map_icon_places0002_png.scaleX = 0.9420092065941514;
		map_icon_places0002_png.scaleY = 0.8928967974021816;
		map_icon_places0002_png.visible = false;

		// map_icon_games0002_png
		const map_icon_games0002_png = this.add.image(184, 72, "map", "map_icon_games0002.png");
		map_icon_games0002_png.scaleX = 0.9420092065941514;
		map_icon_games0002_png.scaleY = 0.8928967974021816;
		map_icon_games0002_png.visible = false;

		// map_shops_icon0002_png
		const map_shops_icon0002_png = this.add.image(302, 72, "map", "map_shops_icon0002.png");
		map_shops_icon0002_png.scaleX = 0.9420092065941514;
		map_shops_icon0002_png.scaleY = 0.8928967974021816;
		map_shops_icon0002_png.visible = false;

		// map_pets_icon0002_png
		const map_pets_icon0002_png = this.add.image(422, 72, "map", "map_pets_icon0002.png");
		map_pets_icon0002_png.scaleX = 0.9420092065941514;
		map_pets_icon0002_png.scaleY = 0.8928967974021816;
		map_pets_icon0002_png.visible = false;

		// map_skate_park_location_highlighted0001_png
		const map_skate_park_location_highlighted0001_png = this.add.image(1369, 488, "map", "map_skate_park_location_highlighted0001.png");
		map_skate_park_location_highlighted0001_png.scaleX = 0.9664342203585101;
		map_skate_park_location_highlighted0001_png.scaleY = 1.019864906512589;
		map_skate_park_location_highlighted0001_png.visible = false;

		// map_plaza_location_highlighted0001_png
		const map_plaza_location_highlighted0001_png = this.add.image(985, 584, "map", "map_plaza_location_highlighted0001.png");
		map_plaza_location_highlighted0001_png.scaleX = 1.0212354632786298;
		map_plaza_location_highlighted0001_png.scaleY = 1.0235643845457691;
		map_plaza_location_highlighted0001_png.visible = false;

		// map_puffle_park_location_highlighted0001_png
		const map_puffle_park_location_highlighted0001_png = this.add.image(920, 462, "map", "map_puffle_park_location_highlighted0001.png");
		map_puffle_park_location_highlighted0001_png.scaleX = 0.9768461589757744;
		map_puffle_park_location_highlighted0001_png.scaleY = 1.1460341802484506;
		map_puffle_park_location_highlighted0001_png.visible = false;

		// map_snow_forts_location_highlighted0001_png
		const map_snow_forts_location_highlighted0001_png = this.add.image(772, 526, "map", "map_snow_forts_location_highlighted0001.png");
		map_snow_forts_location_highlighted0001_png.scaleX = 1.0419532640948037;
		map_snow_forts_location_highlighted0001_png.scaleY = 1.0186535093835423;
		map_snow_forts_location_highlighted0001_png.visible = false;

		// map_mine_location_highlighted0001_png
		const map_mine_location_highlighted0001_png = this.add.image(1169, 474, "map", "map_mine_location_highlighted0001.png");
		map_mine_location_highlighted0001_png.scaleX = 0.8995387999035417;
		map_mine_location_highlighted0001_png.scaleY = 0.9385533683643583;
		map_mine_location_highlighted0001_png.visible = false;

		// map_soccer_stadium_location_highlighted0001_png
		const map_soccer_stadium_location_highlighted0001_png = this.add.image(664, 401, "map", "map_soccer_stadium_location_highlighted0001.png");
		map_soccer_stadium_location_highlighted0001_png.scaleX = 0.9841291929192708;
		map_soccer_stadium_location_highlighted0001_png.scaleY = 0.853090296000665;
		map_soccer_stadium_location_highlighted0001_png.visible = false;

		// map_exit_button0001_png
		const map_exit_button0001_png = this.add.image(1483, 44, "map", "map_exit_button0001.png");
		map_exit_button0001_png.scaleX = 0.8708144524318399;
		map_exit_button0001_png.scaleY = 0.8870811386825845;

		// map_exit_button0002_png
		const map_exit_button0002_png = this.add.image(1483, 44, "map", "map_exit_button0002.png");
		map_exit_button0002_png.scaleX = 0.8708144524318399;
		map_exit_button0002_png.scaleY = 0.8870811386825845;
		map_exit_button0002_png.visible = false;

		// map_town_location_highlighted0001_png
		const map_town_location_highlighted0001_png = this.add.image(579, 564, "map", "map_town_location_highlighted0001.png");
		map_town_location_highlighted0001_png.scaleX = 0.985285515880733;
		map_town_location_highlighted0001_png.scaleY = 1.1318679648973933;
		map_town_location_highlighted0001_png.visible = false;

		// map_ski_lodge_location_highlighted0001_png
		const map_ski_lodge_location_highlighted0001_png = this.add.image(452, 470, "map", "map_ski_lodge_location_highlighted0001.png");
		map_ski_lodge_location_highlighted0001_png.scaleX = 1.057003688455064;
		map_ski_lodge_location_highlighted0001_png.scaleY = 1.201057851256463;
		map_ski_lodge_location_highlighted0001_png.visible = false;

		// map_puffle_wild_location_highlighted0001_png
		const map_puffle_wild_location_highlighted0001_png = this.add.image(531, 382, "map", "map_puffle_wild_location_highlighted0001.png");
		map_puffle_wild_location_highlighted0001_png.scaleX = 0.9705330978300188;
		map_puffle_wild_location_highlighted0001_png.scaleY = 1.1807689930511711;
		map_puffle_wild_location_highlighted0001_png.visible = false;

		// map_light_house_location_highlighted0001_png
		const map_light_house_location_highlighted0001_png = this.add.image(85, 604, "map", "map_light_house_location_highlighted0001.png");
		map_light_house_location_highlighted0001_png.scaleX = 0.9748736041393414;
		map_light_house_location_highlighted0001_png.scaleY = 0.916810657578877;
		map_light_house_location_highlighted0001_png.visible = false;

		// map_icon_places0004_png
		const map_icon_places0004_png = this.add.image(66, 72, "map", "map_icon_places0004.png");
		map_icon_places0004_png.scaleX = 0.9420092065941514;
		map_icon_places0004_png.scaleY = 0.8928967974021816;
		map_icon_places0004_png.visible = false;

		// map_icon_games0004_png
		const map_icon_games0004_png = this.add.image(184, 72, "map", "map_icon_games0004.png");
		map_icon_games0004_png.scaleX = 0.9420092065941514;
		map_icon_games0004_png.scaleY = 0.8928967974021816;
		map_icon_games0004_png.visible = false;

		// map_pets_icon0004_png
		const map_pets_icon0004_png = this.add.image(422, 72, "map", "map_pets_icon0004.png");
		map_pets_icon0004_png.scaleX = 0.9420092065941514;
		map_pets_icon0004_png.scaleY = 0.8928967974021816;
		map_pets_icon0004_png.visible = false;

		// map_shops_icon0004_png
		const map_shops_icon0004_png = this.add.image(302, 72, "map", "map_shops_icon0004.png");
		map_shops_icon0004_png.scaleX = 0.9420092065941514;
		map_shops_icon0004_png.scaleY = 0.8928967974021816;
		map_shops_icon0004_png.visible = false;

		// map_games_sled_racing_icon0001_png
		const map_games_sled_racing_icon0001_png = this.add.image(310, 260, "map", "map_games_sled_racing_icon0001.png");
		map_games_sled_racing_icon0001_png.scaleX = 0.867172345120157;
		map_games_sled_racing_icon0001_png.scaleY = 0.8305249541738066;
		map_games_sled_racing_icon0001_png.visible = false;

		// map_games_ice_fishing_icon_png
		const map_games_ice_fishing_icon_png = this.add.image(419, 422, "map", "map_games_ice_fishing_icon.png");
		map_games_ice_fishing_icon_png.scaleX = 0.867172345120157;
		map_games_ice_fishing_icon_png.scaleY = 0.8305249541738066;
		map_games_ice_fishing_icon_png.visible = false;

		// map_games_jet_pack_icon
		const map_games_jet_pack_icon = this.add.image(155, 531, "map", "map_games_jet_pack_icon0001.png");
		map_games_jet_pack_icon.scaleX = 0.867172345120157;
		map_games_jet_pack_icon.scaleY = 0.8305249541738066;
		map_games_jet_pack_icon.visible = false;

		// map_games_hydro_hopper_icon_png
		const map_games_hydro_hopper_icon_png = this.add.image(292, 751, "map", "map_games_hydro_hopper_icon.png");
		map_games_hydro_hopper_icon_png.scaleX = 0.867172345120157;
		map_games_hydro_hopper_icon_png.scaleY = 0.8305249541738066;
		map_games_hydro_hopper_icon_png.visible = false;

		// map_games_smoothie_smash_icon_png
		const map_games_smoothie_smash_icon_png = this.add.image(431, 531, "map", "map_games_smoothie_smash_icon.png");
		map_games_smoothie_smash_icon_png.scaleX = 0.867172345120157;
		map_games_smoothie_smash_icon_png.scaleY = 0.8305249541738066;
		map_games_smoothie_smash_icon_png.visible = false;

		// map_games_bean_counter_icon0001_png
		const map_games_bean_counter_icon0001_png = this.add.image(445, 638, "map", "map_games_bean_counter_icon0001.png");
		map_games_bean_counter_icon0001_png.scaleX = 0.867172345120157;
		map_games_bean_counter_icon0001_png.scaleY = 0.8305249541738066;
		map_games_bean_counter_icon0001_png.visible = false;

		// map_games_astro_barrier_icon0001_png
		const map_games_astro_barrier_icon0001_png = this.add.image(551, 470, "map", "map_games_astro_barrier_icon0001.png");
		map_games_astro_barrier_icon0001_png.scaleX = 0.867172345120157;
		map_games_astro_barrier_icon0001_png.scaleY = 0.8305249541738066;
		map_games_astro_barrier_icon0001_png.visible = false;

		// map_games_sound_studio_icon_png
		const map_games_sound_studio_icon_png = this.add.image(561, 630, "map", "map_games_sound_studio_icon.png");
		map_games_sound_studio_icon_png.scaleX = 0.867172345120157;
		map_games_sound_studio_icon_png.scaleY = 0.8305249541738066;
		map_games_sound_studio_icon_png.visible = false;

		// map_games_dance_contest_icon0001_png
		const map_games_dance_contest_icon0001_png = this.add.image(675, 508, "map", "map_games_dance_contest_icon0001.png");
		map_games_dance_contest_icon0001_png.scaleX = 0.867172345120157;
		map_games_dance_contest_icon0001_png.scaleY = 0.8305249541738066;
		map_games_dance_contest_icon0001_png.visible = false;

		// map_games_puffle_launch_icon_png
		const map_games_puffle_launch_icon_png = this.add.image(842, 575, "map", "map_games_puffle_launch_icon.png");
		map_games_puffle_launch_icon_png.scaleX = 0.867172345120157;
		map_games_puffle_launch_icon_png.scaleY = 0.8305249541738066;
		map_games_puffle_launch_icon_png.visible = false;

		// map_games_pufflescape_icon_png
		const map_games_pufflescape_icon_png = this.add.image(928, 653, "map", "map_games_pufflescape_icon.png");
		map_games_pufflescape_icon_png.scaleX = 0.867172345120157;
		map_games_pufflescape_icon_png.scaleY = 0.8305249541738066;
		map_games_pufflescape_icon_png.visible = false;

		// map_games_pizzatron_3000_icon_png
		const map_games_pizzatron_3000_icon_png = this.add.image(1132, 567, "map", "map_games_pizzatron_3000_icon.png");
		map_games_pizzatron_3000_icon_png.scaleX = 0.867172345120157;
		map_games_pizzatron_3000_icon_png.scaleY = 0.8305249541738066;
		map_games_pizzatron_3000_icon_png.visible = false;

		// map_games_cart_surfer_icon_png
		const map_games_cart_surfer_icon_png = this.add.image(1241, 428, "map", "map_games_cart_surfer_icon.png");
		map_games_cart_surfer_icon_png.scaleX = 0.867172345120157;
		map_games_cart_surfer_icon_png.scaleY = 0.8305249541738066;
		map_games_cart_surfer_icon_png.visible = false;

		// map_games_puffle_rescue_icon_png
		const map_games_puffle_rescue_icon_png = this.add.image(1058, 419, "map", "map_games_puffle_rescue_icon.png");
		map_games_puffle_rescue_icon_png.scaleX = 0.867172345120157;
		map_games_puffle_rescue_icon_png.scaleY = 0.8305249541738066;
		map_games_puffle_rescue_icon_png.visible = false;

		// map_games_puffle_roundup_icon_png
		const map_games_puffle_roundup_icon_png = this.add.image(1048, 657, "map", "map_games_puffle_roundup_icon.png");
		map_games_puffle_roundup_icon_png.scaleX = 0.867172345120157;
		map_games_puffle_roundup_icon_png.scaleY = 0.8305249541738066;
		map_games_puffle_roundup_icon_png.visible = false;

		// map_games_aqua_grabber_icon_png
		const map_games_aqua_grabber_icon_png = this.add.image(1391, 402, "map", "map_games_aqua_grabber_icon.png");
		map_games_aqua_grabber_icon_png.scaleX = 0.867172345120157;
		map_games_aqua_grabber_icon_png.scaleY = 0.8305249541738066;
		map_games_aqua_grabber_icon_png.visible = false;

		// map_games_wave_game_icon_png
		const map_games_wave_game_icon_png = this.add.image(1362, 657, "map", "map_games_wave_game_icon.png");
		map_games_wave_game_icon_png.scaleX = 0.867172345120157;
		map_games_wave_game_icon_png.scaleY = 0.8305249541738066;
		map_games_wave_game_icon_png.visible = false;

		// map_shops_sled_icon_png
		const map_shops_sled_icon_png = this.add.image(340, 312, "map", "map_shops_sled_icon.png");
		map_shops_sled_icon_png.scaleX = 0.867172345120157;
		map_shops_sled_icon_png.scaleY = 0.8305249541738066;
		map_shops_sled_icon_png.visible = false;

		// map_shops_fishing_rods_icons_png
		const map_shops_fishing_rods_icons_png = this.add.image(453, 457, "map", "map_shops_fishing_rods_icons.png");
		map_shops_fishing_rods_icons_png.scaleX = 0.867172345120157;
		map_shops_fishing_rods_icons_png.scaleY = 0.8305249541738066;
		map_shops_fishing_rods_icons_png.visible = false;

		// map_shops_hydro_hopper_icon_png
		const map_shops_hydro_hopper_icon_png = this.add.image(338, 743, "map", "map_shops_hydro_hopper_icon.png");
		map_shops_hydro_hopper_icon_png.scaleX = 0.867172345120157;
		map_shops_hydro_hopper_icon_png.scaleY = 0.8305249541738066;
		map_shops_hydro_hopper_icon_png.visible = false;

		// map_shops_clothes_icon_png
		const map_shops_clothes_icon_png = this.add.image(652, 584, "map", "map_shops_clothes_icon.png");
		map_shops_clothes_icon_png.scaleX = 0.867172345120157;
		map_shops_clothes_icon_png.scaleY = 0.8305249541738066;
		map_shops_clothes_icon_png.visible = false;

		// map_shops_music_icon_png
		const map_shops_music_icon_png = this.add.image(180, 615, "map", "map_shops_music_icon.png");
		map_shops_music_icon_png.scaleX = 0.867172345120157;
		map_shops_music_icon_png.scaleY = 0.8305249541738066;
		map_shops_music_icon_png.visible = false;

		// map_shops_snow_and_sports_icon_png
		const map_shops_snow_and_sports_icon_png = this.add.image(664, 420, "map", "map_shops_snow_and_sports_icon.png");
		map_shops_snow_and_sports_icon_png.scaleX = 0.867172345120157;
		map_shops_snow_and_sports_icon_png.scaleY = 0.8305249541738066;
		map_shops_snow_and_sports_icon_png.visible = false;

		// map_shops_costume_trunk_icon_png
		const map_shops_costume_trunk_icon_png = this.add.image(1017, 647, "map", "map_shops_costume_trunk_icon.png");
		map_shops_costume_trunk_icon_png.scaleX = 0.867172345120157;
		map_shops_costume_trunk_icon_png.scaleY = 0.8305249541738066;
		map_shops_costume_trunk_icon_png.visible = false;

		// map_shops_pet_icon_png
		const map_shops_pet_icon_png = this.add.image(884, 629, "map", "map_shops_pet_icon.png");
		map_shops_pet_icon_png.scaleX = 0.867172345120157;
		map_shops_pet_icon_png.scaleY = 0.8305249541738066;
		map_shops_pet_icon_png.visible = false;

		// map_shops_wave_boards_icon_png
		const map_shops_wave_boards_icon_png = this.add.image(1383, 650, "map", "map_shops_wave_boards_icon.png");
		map_shops_wave_boards_icon_png.scaleX = 0.867172345120157;
		map_shops_wave_boards_icon_png.scaleY = 0.8305249541738066;
		map_shops_wave_boards_icon_png.visible = false;

		// map_pets_puffle_wild_icon_png
		const map_pets_puffle_wild_icon_png = this.add.image(517, 367, "map", "map_pets_puffle_wild_icon.png");
		map_pets_puffle_wild_icon_png.scaleX = 0.867172345120157;
		map_pets_puffle_wild_icon_png.scaleY = 0.8305249541738066;
		map_pets_puffle_wild_icon_png.visible = false;

		// map_pets_jet_pack_game_icon_png
		const map_pets_jet_pack_game_icon_png = this.add.image(175, 563, "map", "map_pets_jet_pack_game_icon.png");
		map_pets_jet_pack_game_icon_png.scaleX = 0.867172345120157;
		map_pets_jet_pack_game_icon_png.scaleY = 0.8305249541738066;
		map_pets_jet_pack_game_icon_png.visible = false;

		// map_pets_arcade_icon_png
		const map_pets_arcade_icon_png = this.add.image(547, 494, "map", "map_pets_arcade_icon.png");
		map_pets_arcade_icon_png.scaleX = 0.867172345120157;
		map_pets_arcade_icon_png.scaleY = 0.8305249541738066;
		map_pets_arcade_icon_png.visible = false;

		// map_pets_cart_surfer_icon_png
		const map_pets_cart_surfer_icon_png = this.add.image(1252, 432, "map", "map_pets_cart_surfer_icon.png");
		map_pets_cart_surfer_icon_png.scaleX = 0.867172345120157;
		map_pets_cart_surfer_icon_png.scaleY = 0.8305249541738066;
		map_pets_cart_surfer_icon_png.visible = false;

		// map_pets_catching_waves_icon_png
		const map_pets_catching_waves_icon_png = this.add.image(1394, 667, "map", "map_pets_catching_waves_icon.png");
		map_pets_catching_waves_icon_png.scaleX = 0.867172345120157;
		map_pets_catching_waves_icon_png.scaleY = 0.8305249541738066;
		map_pets_catching_waves_icon_png.visible = false;

		// map_pets_dance_icon_png
		const map_pets_dance_icon_png = this.add.image(658, 579, "map", "map_pets_dance_icon.png");
		map_pets_dance_icon_png.scaleX = 0.867172345120157;
		map_pets_dance_icon_png.scaleY = 0.8305249541738066;
		map_pets_dance_icon_png.visible = false;

		// map_pets_puffle_care_icon_png
		const map_pets_puffle_care_icon_png = this.add.image(693, 753, "map", "map_pets_puffle_care_icon.png");
		map_pets_puffle_care_icon_png.scaleX = 0.867172345120157;
		map_pets_puffle_care_icon_png.scaleY = 0.8305249541738066;
		map_pets_puffle_care_icon_png.visible = false;

		// map_pets_puffle_launch_icon_png
		const map_pets_puffle_launch_icon_png = this.add.image(813, 543, "map", "map_pets_puffle_launch_icon.png");
		map_pets_puffle_launch_icon_png.scaleX = 0.867172345120157;
		map_pets_puffle_launch_icon_png.scaleY = 0.8305249541738066;
		map_pets_puffle_launch_icon_png.visible = false;

		// map_pets_puffle_roundup_icon_png
		const map_pets_puffle_roundup_icon_png = this.add.image(892, 452, "map", "map_pets_puffle_roundup_icon.png");
		map_pets_puffle_roundup_icon_png.scaleX = 0.867172345120157;
		map_pets_puffle_roundup_icon_png.scaleY = 0.8305249541738066;
		map_pets_puffle_roundup_icon_png.visible = false;

		// map_pets_puffle_rescue_icon_png
		const map_pets_puffle_rescue_icon_png = this.add.image(1087, 419, "map", "map_pets_puffle_rescue_icon.png");
		map_pets_puffle_rescue_icon_png.scaleX = 0.867172345120157;
		map_pets_puffle_rescue_icon_png.scaleY = 0.8305249541738066;
		map_pets_puffle_rescue_icon_png.visible = false;

		// map_pets_rainbow_quest_icon_png
		const map_pets_rainbow_quest_icon_png = this.add.image(1065, 548, "map", "map_pets_rainbow_quest_icon.png");
		map_pets_rainbow_quest_icon_png.scaleX = 0.867172345120157;
		map_pets_rainbow_quest_icon_png.scaleY = 0.8305249541738066;
		map_pets_rainbow_quest_icon_png.visible = false;

		// map_pets_pet_furniture_icon_png
		const map_pets_pet_furniture_icon_png = this.add.image(1089, 674, "map", "map_pets_pet_furniture_icon.png");
		map_pets_pet_furniture_icon_png.scaleX = 0.867172345120157;
		map_pets_pet_furniture_icon_png.scaleY = 0.8305249541738066;
		map_pets_pet_furniture_icon_png.visible = false;

		// map_pets_sound_studio_icon_png
		const map_pets_sound_studio_icon_png = this.add.image(956, 667, "map", "map_pets_sound_studio_icon.png");
		map_pets_sound_studio_icon_png.scaleX = 0.867172345120157;
		map_pets_sound_studio_icon_png.scaleY = 0.8305249541738066;
		map_pets_sound_studio_icon_png.visible = false;

		// map_pets_aqua_grabber_icon_png
		const map_pets_aqua_grabber_icon_png = this.add.image(1383, 382, "map", "map_pets_aqua_grabber_icon.png");
		map_pets_aqua_grabber_icon_png.scaleX = 0.867172345120157;
		map_pets_aqua_grabber_icon_png.scaleY = 0.8305249541738066;
		map_pets_aqua_grabber_icon_png.visible = false;

		// map_pets_puffle_adopt_icon0001_png
		const map_pets_puffle_adopt_icon0001_png = this.add.image(929, 560, "map", "map_pets_puffle_adopt_icon0001.png");
		map_pets_puffle_adopt_icon0001_png.scaleX = 0.867172345120157;
		map_pets_puffle_adopt_icon0001_png.scaleY = 0.8305249541738066;
		map_pets_puffle_adopt_icon0001_png.visible = false;

		// map_pets_blue_puffle_add_on_png
		const map_pets_blue_puffle_add_on_png = this.add.image(566, 89, "map", "map_pets_blue_puffle_add_on.png");
		map_pets_blue_puffle_add_on_png.scaleX = 0.9604422953158217;
		map_pets_blue_puffle_add_on_png.scaleY = 1.0766069581903364;
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

		// map_dojo_location_highlighted0001_png
		const map_dojo_location_highlighted0001_png = this.add.image(916, 277, "map", "map_dojo_location_highlighted0001.png");
		map_dojo_location_highlighted0001_png.scaleX = 0.8609862647069376;
		map_dojo_location_highlighted0001_png.scaleY = 0.97092205956378;
		map_dojo_location_highlighted0001_png.visible = false;

		// map_shops_card_jistu_icon_png
		const map_shops_card_jistu_icon_png = this.add.image(894, 278, "map", "map_shops_card_jistu_icon.png");
		map_shops_card_jistu_icon_png.scaleX = 0.867172345120157;
		map_shops_card_jistu_icon_png.scaleY = 0.8305249541738066;
		map_shops_card_jistu_icon_png.visible = false;

		// map_games_card_jistu_icon_png
		const map_games_card_jistu_icon_png = this.add.image(891, 281, "map", "map_games_card_jistu_icon.png");
		map_games_card_jistu_icon_png.scaleX = 0.867172345120157;
		map_games_card_jistu_icon_png.scaleY = 0.8305249541738066;
		map_games_card_jistu_icon_png.visible = false;

        this.map_places_button_text = this.add.text(37, 125, "Places", {
            fontFamily: "cpBurbankSmallBold",
            fontSize: "20px",
            fontStyle: "normal",
            color: "#666666"
        });

        this.map_games_button_text = this.add.text(150, 125, "Games", {
            fontFamily: "cpBurbankSmallBold",
            fontSize: "20px",
            fontStyle: "normal",
            color: "#666666"
        });

        this.map_shops_button_text = this.add.text(273, 125, "Shops", {
            fontFamily: "cpBurbankSmallBold",
            fontSize: "20px",
            fontStyle: "normal",
            color: "#666666"
        });

        this.map_pets_button_text = this.add.text(400, 125, "Pets", {
            fontFamily: "cpBurbankSmallBold",
            fontSize: "20px",
            fontStyle: "normal",
            color: "#666666"
        });

        this.map_pets_favorite_game_play_text = this.add.text(620, 32, "Walk your puffle to its\nfavorite game to play it.", {
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