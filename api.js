import axios from 'axios';
import { useEffect } from 'react';
import { Alert } from 'react-native';

// API를 불러와야 하면 여기에서 해결해주세요.

const API_KEY =
  'eaZfB15ifCURVIUKNkIRx6c5pCGbRgu%2FpNtJHvOW1aOU4uedjC7b%2BLsDmGYuNgsgf3YZ9kBHXJ0YbRGCRMaF4g%3D%3D';
const numOfRows = 10;

// 메인 페이지, 디테일 페이지에서 쓸 json 데이터
// `https://apis.data.go.kr/1543061/abandonmentPublicSrvc/abandonmentPublic?bgnde=20211201&endde=20211231&pageNo=1&numOfRows=10&serviceKey=${API_KEY}&_type=json`

// 필터 페이지에서 쓸 json 데이터
// `http://apis.data.go.kr/1543061/abandonmentPublicSrvc/sido?serviceKey=${API_KEY}&pageNo=${pageParam}&numOfRows=17&_type=json`

//주로 사용하는 fetcher
export const fetchData = async (pageParam) => {
  const res = await axios.get(
    `https://apis.data.go.kr/1543061/abandonmentPublicSrvc/abandonmentPublic?serviceKey=${API_KEY}&pageNo=${pageParam}&_type=json`
  );
  return res.data.response.body;
};

export const fetchFilteredData = async (upr_cd, upkind, pageParam) => {
  const res = await axios.get(
    `https://apis.data.go.kr/1543061/abandonmentPublicSrvc/abandonmentPublic?serviceKey=${API_KEY}&upr_cd=${upr_cd}&upkind=${upkind}&pageNo=${pageParam}&_type=json`
  );
  return res.data.response.body;
};
