const GetEOL = (str) => {
  if (str.includes('\r\n')) {
    return '\r\n';
  }
  if (str.includes('\r')) {
    return '\r';
  }
  return '\n';
};

export default GetEOL;