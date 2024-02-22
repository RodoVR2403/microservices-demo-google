import http from 'k6/http';
import { sleep } from 'k6';

export default function () {
  http.get('https://http://35.245.195.129/');
  sleep(1);
}
