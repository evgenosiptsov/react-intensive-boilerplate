// Core
import { getFullApiUrl } from 'instruments';

const GROUP_ID = '6vf77z4hd5';
const TOKEN = 'rtASDLastuev77';

const SOCKET_URL = 'https://lab.lectrum.io';

const MAIN_URL = "https://lab.lectrum.io/redux/api/feed/";
const SIGNUP_URL = getFullApiUrl("https://lab.lectrum.io/redux/api/user/", GROUP_ID)
const SIGNIN_URL = "https://lab.lectrum.io/redux/api/user/login"

export { GROUP_ID, TOKEN, MAIN_URL, SIGNUP_URL, SIGNIN_URL };
