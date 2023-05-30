package com.sccs.api.member.util;

import javax.servlet.http.Cookie;
import org.springframework.http.ResponseCookie;
import org.springframework.stereotype.Service;

@Service
public class CookieService {

  final int MINUTE = 60;
  final int HOUR   = MINUTE * 60;
  final int DAY    = HOUR * 24;
  /**
   * 쿠키 생성
   **/
//  public Cookie createCookie(String name, String value) {
//    Cookie cookie = new Cookie(name, value);
//    cookie.setMaxAge(8 * HOUR);
//    cookie.setSecure(true);
//    cookie.setHttpOnly(true);
//    cookie.setPath("/");
//    return cookie;
//  }

  public ResponseCookie createCookie(String name, String value) {
    ResponseCookie cookie = ResponseCookie.from(name, value)
        .sameSite("Strict") // None, Lax, Strict
        .secure(true)
        .path("/")
        .maxAge(8 * HOUR)
        .httpOnly(true).build();
    return cookie;
  }
}
