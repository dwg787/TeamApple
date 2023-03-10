// API를 불러와야 하면 여기에서 해결해주세요.

const API_KEY =
  "eaZfB15ifCURVIUKNkIRx6c5pCGbRgu%2FpNtJHvOW1aOU4uedjC7b%2BLsDmGYuNgsgf3YZ9kBHXJ0YbRGCRMaF4g%3D%3D";

// 메인 페이지, 디테일 페이지에서 쓸 json 데이터
// `https://apis.data.go.kr/1543061/abandonmentPublicSrvc/abandonmentPublic?bgnde=20211201&endde=20211231&pageNo=1&numOfRows=10&serviceKey=${API_KEY}&_type=json`

// 필터 페이지에서 쓸 json 데이터
// `https://apis.data.go.kr/1543061/abandonmentPublicSrvc/sido?numOfRows=3&serviceKey=${API_KEY}&_type=json`

// desertionNo

// 디테일 json이 없으므로 params or props로 데이터를 넘겨줘야 한다.

export const getDetail = () => {
  return fetch(
    `https://apis.data.go.kr/1543061/abandonmentPublicSrvc/abandonmentPublic?bgnde=20211201&endde=20211231&numOfRows=100&serviceKey=${API_KEY}&_type=json`
  ).then((res) => res.json());
};
