import BELLAGIO from '../images/bellagio.jpg';
import BIG_TEX from '../images/big_tex.jpg';
import BOSTON_SKYLINE from '../images/boston_skyline.jpg';
import COLORADO_MOUNTAINS from '../images/colorado_mountains.jpg';
import GATEWAY_ARCH from '../images/gateway_arch.jpg';
import GOLDEN_GATE_BRIDGE from '../images/golden_gate_bridge.jpg';
import GRAND_CANYON from '../images/grand_canyon.jpg';
import HOLLYWOOD_HILLS from '../images/hollywood_hills.jpg';
import LIBERTY_BELL from '../images/liberty_bell.jpg'
import LINCOLN_MEMORIAL from '../images/lincoln_memorial.jpg';
import MIAMI_BEACH from '../images/miami_beach.jpg';
import MUSIC_ROW from '../images/music_row.jpg';
import SPACE_NEEDLE from '../images/space_needle.jpg';
import STATUE_OF_LIBERTY from '../images/statue_of_liberty.jpg';
import VIRGINIA_BEACH from '../images/virginia_beach.jpg';
import FRENCH_QUARTER from '../images/the_french_quarter.jpg';
import NIAGRA_FALLS from '../images/niagra_falls.jpg';
import NATIONAL_MALL from '../images/national_mall.jpg';

export const BACK_DROP_IMAGES = [
    { src: HOLLYWOOD_HILLS, alt: 'Hollywood Hills (Los Angeles)' },
    { src: BIG_TEX, alt: 'Big Tex (Dallas)' },
    { src: BOSTON_SKYLINE, alt: 'Boston Skyline' },
    { src: COLORADO_MOUNTAINS, alt: 'Colorado Mountains' },
    { src: GATEWAY_ARCH, alt: 'Gateway Arch (St. Louis)' },
    { src: GOLDEN_GATE_BRIDGE, alt: 'Golden Gate Bridge (San Francisco)' },
    { src: BELLAGIO, alt: 'Bellagio (Las Vegas)' },
    { src: MUSIC_ROW, alt: 'Music Row (Nashville)' },
    { src: LIBERTY_BELL, alt: 'Liberty Bell (Philadelphia)' },
    { src: LINCOLN_MEMORIAL, alt: 'Lincoln Memorial (Washington D.C.)' },
    { src: MIAMI_BEACH, alt: 'Miami Beach' },
    { src: GRAND_CANYON, alt: 'Grand Canyon (Flagstaff)' },
    { src: STATUE_OF_LIBERTY, alt: 'Statue of Liberty (New York)' },
    { src: SPACE_NEEDLE, alt: 'Space Needle (Seattle)' },
    { src: VIRGINIA_BEACH, alt: 'Virginia Beach' },
    { src: FRENCH_QUARTER, alt: 'The French Quarter (Washington DC)' },
    { src: NIAGRA_FALLS, alt: 'Niagra Falls (New York State)' },
    { src: NATIONAL_MALL, alt: 'The French Quarter (New Orleans)' }];   
    
export const DFLT_LAT = 38;
export const DFLT_LNG = -96;
export const DFLT_GAME_ZOOM = 5;
export const DFLT_EXPLORE_ZOOM = 4;
export const DFLT_GAME_MIN_ZOOM = 4;
export const DFLT_GAME_MAX_ZOOM = 6;
export const DFLT_EXPLORE_MIN_ZOOM = 4;
export const DFLT_EXPLORE_MAX_ZOOM = 7;
export const GAME_DFLT_BOUNDS = [[14, -64], [65, -164]];
export const EXPLORE_DFLT_BOUNDS = [[14, -45], [65, -178]];
export const CANADA_CITY_FILE = 'most_populous_canada_cities.json';
export const US_CITY_FILE = 'most_populous_us_cities.json';
export const US_MAX_CITY_CNT = 1000;
export const BOT_CHOICE_RATIO_FILE = 'bot_correct_ratios.json';
export const BOT_CHOICE_RATIO_CNT = 900;
export const BOT_MODE = 1;
export const LOCAL_MODE = 2;
export const NETWORK_MODE = 3;
export const EASY_MODE = 1;
export const MEDIUM_MODE = 2;
export const HARD_MODE = 3;
export const CREATE_GAME = 1;
export const FIND_GAME = 2;
export const CANADA_MAP = 1;
export const US_MAP = 2;
export const OPTIONS_SCREEN = 1;
export const MAP_SCREEN = 2;
export const WIN_SCREEN = 2;
export const START_SECS = 1;
export const START_SECS_LEFT = 29;
export const PLAYER_ONE_IMG = 'green_circle.png';
export const PLAYER_TWO_IMG = 'red_circle.png';
export const TURN_WAIT_TIME = 1200; //milliseconds
export const ROUND_WAIT_TIME = 2500;
export const DFLT_MODE = LOCAL_MODE;
export const DFLT_NAME_ONE = 'Player 1';
export const DFLT_NAME_TWO = 'Player 2';
export const DFLT_CITY_RANGE = 200;
export const DFLT_SPAWN_CNT = 10;
export const DFLT_MAX_SCORE = 7;
export const EASY_BOT_WAIT_MAX = 4.0; //max bot wait-time in easy mode (secs)
export const MEDIUM_BOT_WAIT_MAX = 3.25; //max bot wait-time in medium mode (secs)
export const HARD_BOT_WAIT_MAX = 2.75; //max bot wait-time in hard mode (secs)
export const BOT_CORRECT_PRECISION = 1000000;
export const BOT_FOCUS_ZOOM = 6;
export const BOT_ZOOM_TIME_RANGE = 2;
export const MIN_SPAWN_CNT = 4;
export const MAX_SPAWN_CNT = 30;
export const MIN_CITY_CNT = 100;
export const MAX_CITY_CNT = 1000;
export const MIN_SCORE = 3;
export const MAX_SCORE = 20;
export const HOME_PAGE = 1;
export const ABOUT_PAGE = 2;
export const PLAY_PAGE = 3;
export const EXPLORE_PAGE = 4;
export const CONTACT_PAGE = 5;
export const GMAIL_SERVICE_ID = 'service_1y9djas';
export const MAIL_JS_TEMPLATE_ID = 'template_vs2k7pr';
export const MAIL_JS_USER_ID = 'user_KHa18J4ifnL9cnLlOJnhZ'; 
export const DFLT_EXPLORE_REC_PER_PAGE = 10;
export const TURN_TEXT_TIME = 1500; //time to display player turn text
export const TURN_TEXT_WAIT_TIME = 500;
export const US_STATE_ABBR_LIST = [['AL',
                                    'Alabama'],
                                   ['AK',
                                    'Alaska'],
                                   ['AZ',
                                    'Arizona'],
                                   ['AR',
                                    'Arkansas'],
                                   ['CA',
                                    'California'],
                                   ['CO',
                                    'Colorado'],
                                   ['CT',
                                    'Connecticut'],
                                   ['DE',
                                    'Delaware'],
                                   ['FL',
                                    'Florida'],
                                   ['GA',
                                    'Georgia'],
                                   ['HI',
                                    'Hawaii'],
                                   ['ID',
                                    'Idaho'],
                                   ['IL',
                                    'Illinois'],
                                   ['IN',
                                    'Indiana'],
                                   ['IA',
                                    'Iowa'],
                                   ['KS',
                                    'Kansas'],
                                   ['KY',
                                    'Kentucky'],
                                   ['Louisiana',
                                    'LA'],
                                   ['ME',
                                    'Maine'],
                                   ['MD',
                                    'Maryland'],
                                   ['MA',
                                    'Massachusetts'],
                                   ['MI',
                                    'Michigan'],
                                   ['MN',
                                    'Minnesota'],
                                   ['MS',
                                    'Mississippi'],
                                   ['MO',
                                    'Missouri'],
                                   ['MT',
                                    'Montana'],
                                   ['NE',
                                    'Nebraska'],
                                   ['NV',
                                    'Nevada'],
                                   ['NH',
                                    'New Hampshire'],
                                   ['NJ',
                                    'New Jersey'],
                                   ['NM',
                                    'New Mexico'],
                                   ['NY',
                                    'New York'],
                                   ['NC',
                                    'North Carolina'],
                                   ['ND',
                                    'North Dakota'],
                                   ['OH',
                                    'Ohio'],
                                   ['OK',
                                    'Oklahoma'],
                                   ['OR',
                                    'Oregon'],
                                   ['PA',
                                    'Pennsylvania'],
                                   ['RI',
                                    'Rhode Island'],
                                   ['SC',
                                    'South Carolina'],
                                   ['SD',
                                    'South Dakota'],
                                   ['TN',
                                    'Tennessee'],
                                   ['TX',
                                    'Texas'],
                                   ['UT',
                                    'Utah'],
                                   ['VT',
                                    'Vermont'],
                                   ['VA',
                                    'Virginia'],
                                   ['WA',
                                    'Washington'],
                                   ['WV',
                                    'West Virginia'],
                                   ['WI',
                                    'Wisconsin'],
                                   ['WY',
                                    'Wyoming']];
export const BOT_NAMES = ['Carrot',
                          'Hermione',
                          'Hammer',
                          'Peppermint',
                          'Boo',
                          'Manatee',
                          'Einstein',
                          'Dimples',
                          'Pookie',
                          'Piglet',
                          'Joker',
                          'Cindy Lou Who',
                          'Peep',
                          'Popeye',
                          'Fattykins',
                          'Silly Sally',
                          'Cruella',
                          'Lefty',
                          'Lobster',
                          'Giggles',
                          'Toodles',
                          'Buck',
                          'Double Bubble',
                          'Pixie',
                          'Oompa Loompa',
                          'Amigo',
                          'Bandit',
                          'Romeo',
                          'Muhammad',
                          'Moose',
                          'Smoochie',
                          'Tazz',
                          'Luna',
                          'Simba',
                          'Ariel',
                          'Luther',
                          'Thud',
                          'Angel',
                          'Twig',
                          'Brainiac',
                          'Kirby',
                          'Ash',
                          'Hawk',
                          'Thumper',
                          'Rabbit',
                          'Goose',
                          'Dreamey',
                          'Sunshine',
                          'Savage'];
export const CORRECT_ANSWER_RESPONSES = [`Exactly right 🙂`,
                                         `Excellent 🙂`,
                                         `Excellent 😛`,
                                         `Excellent! 😛`,
                                         `Excellent! 🌞`,
                                         `Exceptional 🙂`,
                                         `Fabulous! 😃`,
                                         `Fantastic! 🌞`,
                                         `Fantastic! 😛`,
                                         `Sensational! 😃`,
                                         `Wonderful! 🤩`,
                                         `Outstanding! 😛`,
                                         `Outstanding! 😛`,
                                         `That’s it! 🤪`,
                                         `That’s it! 🤪`,
                                         `Just right! 🤓`,
                                         `Unbelievable! 🦄`,
                                         `Way to go! 👳‍♀️`,
                                         `Simply superb 👍`,
                                         `Stupendous! 😛`,
                                         `Magnificent 😛`,
                                         `Marvelous! 🤩`,
                                         `First class job 🙂`,
                                         `First class work 🙂`,
                                         `Correct 🤓`,
                                         `Correct 🤓`,
                                         `Correct 😁`,
                                         `Good for you! 😁`,
                                         `That’s great 👍`,
                                         `Good going 🙂`,
                                         `Good thinking 🤓`,
                                         `Right on! 🤠`,
                                         `Right on! 🤠`,
                                         `Better than ever! 🥳`,
                                         `Correct 🤩`,
                                         `Correct 🤩`,
                                         `Impressive! 🤩`,
                                         `You’re one of a kind 🍀🐞`,
                                         `Yes 👍`,
                                         `Yes 😃`,
                                         `Yes 👍`,
                                         `Way to go! 😃`,
                                         `You’ve mastered it 😉`,
                                         `Amazing! 😄`,
                                         `Amazing! 😄`,
                                         `Amazing! 😄`,
                                         `Fantastic! 👩`,
                                         `You're learning a lot 🤓`,
                                         `Yes! 😄`,
                                         `Yes! 😄`,
                                         `Yes! 🙂`,
                                         `Yes! 🙂`,
                                         `Yes 🙂`,
                                         `Yes 🙂`,
                                         `Yes 👍`,
                                         `Yes 👍`,
                                         `You're so good 🤠`,
                                         `You did it that time! 👵🏾`,
                                         `You don't miss a thing 🧐`,
                                         `You got it right! 🥳`,
                                         `You hit the target 🎯`,
                                         `You're the best! 😊`,
                                         `That's right! 😃`,
                                         `That's right! 😊`,
                                         `Keep up the great work! 💪`,
                                         `Nothing can stop you 😃`,
                                         `Right 🙂`,
                                         `Right 🙂`,
                                         `Correct 🙂`,
                                         `You make it look easy 😎`,
                                         `That’s really nice work! 😃`,
                                         `You’re doing beautifully ✨`,
                                         `You're very good 😁`,
                                         `Nice going! 👍`,
                                         `That’s right ✔️`,
                                         `Well done 🙂`,
                                         `I’m speechless! 🤐😁`,
                                         `Great work 🙂`,
                                         `Keep it up! 💪`,
                                         `You got it! 😎`,
                                         `Not bad at all 😉`,
                                         `That’s the way! 🚗`,
                                         `That’s it exactly ✔️`,
                                         `Tremendous job 👍`,
                                         `You’re doing well 🤓`,
                                         `You’re learning fast 🧠`,
                                         `That’s the way to do it 🚗`,
                                         `You're coming along quite nicely 🙃`,
                                         `You’re doing a great job 👏`,
                                         `You must have been practicing 🤪`,
                                         `I’ve never seen anyone do it better 🏆`,
                                         `Phenominal! 🤟🤟🤟`,
                                         `You've got it made! 😎`,
                                         `Good job! 👏👏👏`,
                                         `Good job! 👏👏👏`,
                                         `Correct! 🙂`,
                                         `You're the bees' knees! 🐝🐝🐝`,
                                         `Fabulous! 🙂`,
                                         `You're the city king! 👑👑👑`,
                                         `You know your cities! 🏙️🏙️🏙️`,
                                         `Way to navigate! 🔍`,
                                         `Marvelous! 😄`,
                                         `Sensational 🏆!`,
                                         `Mind Blown!! 🤯🤯🤯`,
                                         `You're a star ⭐`,
                                         `Right on target 🎯`,
                                         `Right on target 🎯`,
                                         `Beautiful! ✨`,
                                         `You're getting the hang of this! 🙃`,
                                         `Groovy! 🤟`,
                                         `Groovy! 🤟`,
                                         `Nice job 🥂`,
                                         `Nice job 🥂`,
                                         `Right! 🥳`,
                                         `Correct 😃`,
                                         `Purrr-fect! 😺`,
                                         `Awesome! 😎`,
                                         `Correct! 🙂`,
                                         `Very Good 😃`,
                                         `Good 😎`,
                                         `Good 😎`,
                                         `Good 🙂`,
                                         `Good 🙂`,
                                         `Good 🙂`,
                                         `Great 😄`,
                                         `Great 😄`,
                                         `Great 🙂`,
                                         `Good 😄`];