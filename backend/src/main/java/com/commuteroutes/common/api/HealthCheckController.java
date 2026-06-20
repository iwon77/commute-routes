package com.commuteroutes.common.api;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/health")
public class HealthCheckController {

	private final String applicationName;

	public HealthCheckController(
		@Value("${spring.application.name:commute-routes-backend}") String applicationName
	) {
		this.applicationName = applicationName;
	}

	@GetMapping
	public HealthResponse health() {
		return new HealthResponse("UP", applicationName);
	}
}
