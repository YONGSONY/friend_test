import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  // firebase 설정과 관련된 개인 정보
  apiKey: "AIzaSyBP0roT9h22Ww8yExB6_3POxpJHlrvRdfk",
  authDomain: "friend-test-d2ffe.firebaseapp.com",
  projectId: "friend-test-d2ffe",
  storageBucket: "friend-test-d2ffe.appspot.com",
  messagingSenderId: "1437116491",
  appId: "1:1437116491:web:eaae7558529f554caa05ce",
  measurementId: "G-RBMDLW453K"
};

// firebaseConfig 정보로 firebase 시작
firebase.initializeApp(firebaseConfig);

// firebase의 firestore 인스턴스를 변수에 저장
const firestore = firebase.firestore();

// 필요한 곳에서 사용할 수 있도록 내보내기
export { firestore };