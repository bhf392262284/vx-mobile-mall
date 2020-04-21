const host = "http://linjiashop.microapp.store/prod-api/";

const baseImageUrl =
  "http://linjiashop.microapp.store/prod-api/file/getImgStream?idFile=";

function request(url, method, data) {
  wx.showLoading({
    title: "加载中", // 数据请求前loading
  });
  return new Promise((resolve, reject) => {
    wx.request({
      url: host + url, // 仅为示例，并非真实的接口地址
      method: method, // 请求方式get或post
      data: data,
      header: {
        "Content-Type": "application/json",
        Authorization: wx.getStorageSync("token"),
      },
      success: function (res) {
        wx.hideLoading();
        resolve(res.data);
      },
      fail: function (res) {
        wx.hideLoading();
        // reject(false)
      },
      complete: function () {
        wx.hideLoading();
      },
    });
  });
}

export { request, baseImageUrl };
