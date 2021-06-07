const REGEX = {
  PASSWORD_ANY: /^\S{6,50}$/,
  USER_NAME: /^[a-zA-Z0-9._]+$/,
  EMAIL: /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/,
}

export default REGEX