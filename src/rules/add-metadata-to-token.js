/**
 * @title User metadata for Cuumul.io
 * @overview Add Cumul.io user metaadata to token to be used for Cumul.io dashboard filtering
 * @gallery true
 * @category marketplace
 */


function addMetadataToToken(user, context, callback) {
  const namespace = 'https://cumulio/';
  user.user_metadata = user.user_metadata || {};
  user.user_metadata.cumulio = user.user_metadata.cumulio || {};
  Object.keys(user.user_metadata.cumulio).forEach((k) => {
    context.idToken[namespace + k] = user.user_metadata.cumulio[k];
    context.accessToken[namespace + k] = user.user_metadata.cumulio[k];
  });
  callback(null, user, context);
}
