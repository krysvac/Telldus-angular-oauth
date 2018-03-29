import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as oauth from '../../../assets/oauthSignature.js';
import * as moment from 'moment';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: [ './start.component.scss' ]
})
export class StartComponent implements OnInit {
  public authLink: string = '';

  private readonly consumerKey: string = '';
  private readonly consumerSecret: string = '';
  private readonly token: string = '';
  private readonly tokenSecret: string = '';

  private readonly httpMethod = 'GET';
  private readonly url: string = 'https://api.telldus.com/oauth/requestToken';
  private readonly signature_method: string = 'HMAC-SHA1';
  private readonly version: string = '1.0';

  constructor (private http: HttpClient) {
  }

  ngOnInit () {
  }

  public getAuthLink () {
    const hashSalt = ((CryptoJS.lib.WordArray as any).random(32) as CryptoJS.WordArray).toString();
    const hashDigest = CryptoJS.HmacSHA256(hashSalt, this.consumerSecret);

    const hmacSalt = ((CryptoJS.lib.WordArray as any).random(32) as CryptoJS.WordArray).toString();
    const nonce = CryptoJS.HmacSHA256(hashDigest.toString(), hmacSalt + this.tokenSecret);

    const httpMethod = this.httpMethod,
      url = this.url,
      parameters: TokenParameters = {
        oauth_consumer_key: this.consumerKey,
        oauth_nonce: nonce.toString(),
        oauth_signature_method: this.signature_method,
        oauth_timestamp: moment().unix(),
        oauth_token: this.token,
        oauth_version: this.version
      },
      consumerSecret = this.consumerSecret,
      // generates a RFC 3986 encoded, BASE64 encoded HMAC-SHA1 hash
      encodedSignature = oauth.generate(httpMethod, url, parameters, consumerSecret, null),
      // generates a BASE64 encode HMAC-SHA1 hash
      signature = oauth.generate(httpMethod, url, parameters, consumerSecret, null, {encodeSignature: false});

    this.authLink = url + '?' +
      'oauth_consumer_key=' + parameters.oauth_consumer_key +
      '&oauth_nonce=' + parameters.oauth_nonce +
      '&oauth_signature_method=' + parameters.oauth_signature_method +
      '&oauth_timestamp=' + parameters.oauth_timestamp +
      '&oauth_token=' + parameters.oauth_token +
      '&oauth_version=' + parameters.oauth_version +
      '&oauth_signature=' + signature;

    /*this.getToken(parameters, encodedSignature, url).subscribe(
      data => {
        console.log(data);
      }, err => {
        console.error(err);
      }
    );*/
  }

  private getToken (parameters: TokenParameters, signature: string, url: string) {
    const queryUrl = url + '?' +
      'oauth_consumer_key=' + parameters.oauth_consumer_key +
      '&oauth_nonce=' + parameters.oauth_nonce +
      '&oauth_signature_method=' + parameters.oauth_signature_method +
      '&oauth_timestamp=' + parameters.oauth_timestamp +
      '&oauth_token=' + parameters.oauth_token +
      '&oauth_version=' + parameters.oauth_version +
      '&oauth_signature=' + signature;

    const authHeader = 'OAuth oauth_consumer_key="' + parameters.oauth_token + '",' +
      'oauth_token=' + parameters.oauth_token + '",' +
      'oauth_signature_method=' + parameters.oauth_signature_method + '",' +
      'oauth_signature=' + signature + '",' +
      'oauth_timestamp=' + parameters.oauth_timestamp + '",' +
      'oauth_nonce=' + parameters.oauth_nonce + '",' +
      'oauth_version=' + parameters.oauth_version;

    console.log(queryUrl);

    return this.http.get(queryUrl, {headers: {'Content-Type': 'application/x-www-form-urlencoded', 'Authorization': authHeader}});
  }
}

export class TokenParameters {
  oauth_consumer_key: string;
  oauth_token: string;
  oauth_nonce: string;
  oauth_timestamp: number;
  oauth_signature_method: string;
  oauth_version: string;
}

