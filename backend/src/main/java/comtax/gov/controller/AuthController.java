package comtax.gov.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import comtax.gov.model.User;

@RestController
public class AuthController {

	@PostMapping("/login")
	public ResponseEntity<String> login(@RequestBody User user) {
		if ("admin".equals(user.getUsername()) && "password".equals(user.getPassword())) {
			return ResponseEntity.ok("Login Successful for " + user.getUsername());
		}
		return ResponseEntity.status(401).body("Login Failed");
	}

}
