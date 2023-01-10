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
// `https://apis.data.go.kr/1543061/abandonmentPublicSrvc/sido?numOfRows=3&serviceKey=${API_KEY}&_type=json`

export const fetchData = async ({ pageParam = 1 }) => {
  return await axios.get(
    // `http://apis.data.go.kr/1543061/abandonmentPublicSrvc/sido?serviceKey=${API_KEY}&pageNo=${pageParam}&numOfRows=17&_type=json`
    `https://apis.data.go.kr/1543061/abandonmentPublicSrvc/abandonmentPublic?serviceKey=${API_KEY}&_type=json`
  );
};
// desertionNo

// 디테일 json이 없으므로 params or props로 데이터를 넘겨줘야 한다.

export const getDetail = () => {
  return fetch(
    `https://apis.data.go.kr/1543061/abandonmentPublicSrvc/abandonmentPublic?bgnde=20211201&endde=20211231&numOfRows=10&serviceKey=${API_KEY}&_type=json`
  ).then((res) => res.json());
};

export const fetchFilteredData = async ({ upr_cd, upkind }) => {
  return await axios.get(
    `https://apis.data.go.kr/1543061/abandonmentPublicSrvc/abandonmentPublic?serviceKey=BbWyoYrUP9kk1GfSwQf%2BnNC9dq7LDgSw6o413LyKbUaLWOZ9%2FGriGFJnYXGB38Gahxe517KXWVh4v1g323qwqA%3D%3D&upr_cd=${upr_cd}&upkind=${upkind}&_type=json`
  );
};
