import {sendAPIRequest} from '../../../utils/restfulAPI';
import {LOG} from '../../../utils/constants';

export default async function SendFindRequest(jsonRequest,serverUrl,setPlaces) {
    try{
        LOG.info(jsonRequest);
        const findResponse = await sendAPIRequest({requestType:"find",match:jsonRequest,limit:50}, serverUrl);

        if (findResponse) {
            setPlaces(findResponse.places);
        } else {
            LOG.error("Find request failed at else.");
        }
    }
    catch(e){
        LOG.error(`Find request to ${serverUrl} failed. Check the log for more details.`,e);
    }
}