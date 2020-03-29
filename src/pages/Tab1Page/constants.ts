
export const NameSpace = 'Tab1Page';

/*** 
 * Action Definitions - START 
 * Action names should be declarative that can be understood. 
 * So we would encourage you to use AJAX or STATE names to signify the action done
 * Names to choose - { STATE / FETCH }_{ WORK DONE ? }_{ TARGET }
 * ***/
export const Tab1Actions = {
    STATE_COUNT_INCREMENT : `[Page] -> ${NameSpace}/STATE_COUNT_INCREMENT`,
    FETCH_GET_COUNTRIES : `[Page] -> ${NameSpace}/FETCH_GET_COUNTRIES`,
    STATE_PUT_COUNTRIES : `[Page] -> ${NameSpace}/STATE_PUT_COUNTRIES`,
}
/*** Action Definitions - END ***/

/** Component Constants - START */
export const Api = {
    countries: "http://www.mocky.io/v2/5e2871fe3200001206d8423e"
}
/** Component Constants - END */