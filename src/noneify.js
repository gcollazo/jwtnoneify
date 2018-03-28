function getTokenParts(token) {
  let tokenParts = token.split('.');
  return {
    header: tokenParts[0],
    payload: tokenParts[1],
    signature: tokenParts[2]
  };
}

function decodePart(header) {
  return JSON.parse(Buffer.from(header, 'base64').toString());
}

function encodePart(header) {
  return Buffer.from(JSON.stringify(header)).toString('base64');
}

function removeTrailingEqualSigns(string) {
  return string.split(/\=+$/g)[0];
}

function generateToken({ header, payload, signature }) {
  let cleanHeader = removeTrailingEqualSigns(header);
  let cleanPayload = removeTrailingEqualSigns(payload);
  let cleanSignature = removeTrailingEqualSigns(signature);
  return `${cleanHeader}.${cleanPayload}.${cleanSignature}`;
}

function noneifyJwtHeader(token) {
  let tokenParts = getTokenParts(token);
  let { header } = tokenParts;
  let decodedHeader = decodePart(header);
  decodedHeader.alg = 'none';
  let modifiedHeaderB64 = encodePart(decodedHeader);
  return generateToken({
    header: modifiedHeaderB64,
    payload: tokenParts.payload,
    signature: tokenParts.signature
  });
}

module.exports = noneifyJwtHeader;
