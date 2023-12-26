import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
    faAddressCard,
    faAnglesLeft,
    faAnglesRight,
    faBackward,
    faBackwardFast,
    faChevronLeft,
    faChevronRight,
    faForward,
    faForwardFast,
    faRightFromBracket,
    faRightToBracket,
    faTrash,
    faUser
} from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faBell } from '@fortawesome/free-regular-svg-icons';

library.add(
    faRightToBracket,
    faAddressCard,
    faUser,
    faChevronRight,
    faChevronLeft,
    faXTwitter,
    faInstagram,
    faFacebook,
    faRightFromBracket,
    faBell,
    faTrash,
    faBackward,
    faForward,
    faBackwardFast,
    faForwardFast
);

export default FontAwesomeIcon