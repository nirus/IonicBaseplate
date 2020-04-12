/**
 * This file is a common place to collate & share all your common 
 * AJAX api calls. So that other pages can consume the same inside Redux-Saga.
 * 
 * Goal of this file is to provide a common sharing interface for 
 * Fetch api from different pages.
 * 
 * Alternatively you can go for xfetchapi folder to group common
 * network calls & share it across the codebase
 * 
 * Read readme.md for more details
 */

import { fetchSimpleApi } from 'src/pages/SimplePage/fetchapi';

export {
    fetchSimpleApi
};