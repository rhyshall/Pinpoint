export const DFLT_LAT = 38;
export const DFLT_LNG = -96;
export const DFLT_ZOOM = 5;
export const DFLT_MIN_ZOOM = 4;
export const DFLT_MAX_ZOOM = 6;
export const DFLT_BOUNDS = [[14, -64], [65, -164]];
export const CANADA_CITY_FILE = 'most_populous_canada_cities.json';
export const US_CITY_FILE = 'most_populous_us_cities.json';
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
export const START_SECS_LEFT = 59;
export const PLAYER_ONE_IMG = 'green_circle.png';
export const PLAYER_TWO_IMG = 'red_circle.png';
export const TURN_WAIT_TIME = 1000; //milliseconds
export const ROUND_WAIT_TIME = 2100;
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
export const GLOSSARY_PAGE = 4;
export const CONTACT_PAGE = 5;
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

