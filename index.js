document.addEventListener("DOMContentLoaded", (e) => {
  let configID = document.querySelector("#id i");
  let idText = document.querySelector("#id span");
  configID.addEventListener("click", function (e) {
    let txtid = prompt("새로운 아이디를 입력하세요");
    if (txtid.trim()) idText.textContent = txtid;
  });

  let profileEditButton = document.querySelector("#profile_info button ");
  let userInfo = document.querySelector("#userInfo");
  let summary = document.querySelector("#summary");
  let profileDetail = document.querySelector("#profiledetail");
  let changing = false;

  profileEditButton.addEventListener("click", (e) => {
    if (changing) {
      let _userInfo = userInfo.querySelector("input").value;
      let _summary = summary.querySelector("input").value;
      let _profileDetail = profileDetail.querySelector("input").value;

      userInfo.innerHTML = _userInfo;
      summary.innerHTML = _summary;
      if (_profileDetail.startsWith("http")) {
        _profileDetail = "<a href=" + _profileDetail + ">" + _profileDetail + "</a>";
        profileDetail.innerHTML = _profileDetail;
        e.target.textContent = "프로필 편집";
        changing = false;
      }
    } else {
      let _userInfo = userInfo.textContent;
      let _summary = summary.textContent;
      let _profileDetail = profileDetail.textContent;
      userInfo.innerHTML = "<input type='text' value=" + _userInfo + "></input";
      summary.innerHTML = "<input type='text' value=" + _summary + "></input";
      profileDetail.innerHTML = "<input type='text' value=" + _profileDetail + "></input";

      e.target.textContent = "프로필 편집완료";
      changing = true;
    }
  });

  let profile_pic = document.querySelector("#profile_pic .circle_pic");

  profile_pic.addEventListener("mouseover", (e) => {
      e.target.style.filter = "grayscale(50%)";
  });
  profile_pic.addEventListener("mouseleave", (e) => {
    e.target.style.filter = "grayscale(0%)";

    profile_pic.addEventListener("click", (e) => {
        profile_pic.setAttribute("src", prompt("이미지 url을 입력하세요"))
    });
});
});
