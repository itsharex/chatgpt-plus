import http from "@/http/config";

export const userLogin = (data) => {
  return http({
    url: "/api/admin/login",
    method: "post",
    data,
  });
};

export const userLogout = () => {
  return http({
    url: "/api/admin/logout",
    method: "get",
  });
};

export const getSession = () => {
  return http({
    url: "/api/admin/session",
    method: "get",
  });
};


export const loginLog = (params) => {
  return http({
    url: "/api/admin/user/loginLog",
    method: "get",
    params
  })
}

export const captcha = () => {
  return http({
    url: "/api/admin/login/captcha",
    method: "get",
  });
};
