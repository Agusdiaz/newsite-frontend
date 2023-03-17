const isMobileDevice = () => {
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|X11/i.test(
      navigator.userAgent
    )
  )
    return true;
  else return false;
};

export default isMobileDevice;
