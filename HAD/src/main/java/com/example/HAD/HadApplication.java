package com.example.HAD;



import java.util.Collections;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.web.reactive.function.client.WebClient;

@SpringBootApplication
public class HadApplication {

	
	@Bean
	public WebClient getWebclient()
	{
		String token="Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJBbFJiNVdDbThUbTlFSl9JZk85ejA2ajlvQ3Y1MXBLS0ZrbkdiX1RCdkswIn0.eyJleHAiOjE2Nzc5MTU5MjYsImlhdCI6MTY3NzkxNTMyNiwianRpIjoiZTk5N2FkYjEtY2Q3ZC00NWFlLWI2YTEtMDBhNDRhOTE4NDhlIiwiaXNzIjoiaHR0cHM6Ly9kZXYubmRobS5nb3YuaW4vYXV0aC9yZWFsbXMvY2VudHJhbC1yZWdpc3RyeSIsImF1ZCI6ImFjY291bnQiLCJzdWIiOiI3MmQ3NzY0OC1mMjcyLTQ1OTEtYTBkNy0xZDMxYTVlZjNhNTQiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJTQlhfMDAyMDM5Iiwic2Vzc2lvbl9zdGF0ZSI6IjU0ODlhOTBiLTVlZGItNDJjYi05MjdhLTFiYWY4OGIxY2YxMyIsImFjciI6IjEiLCJhbGxvd2VkLW9yaWdpbnMiOlsiaHR0cDovL2xvY2FsaG9zdDo5MDA3Il0sInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJIaWRJbnRlZ3JhdGVkUHJvZ3JhbSIsImhpdSIsIm9mZmxpbmVfYWNjZXNzIiwiaGVhbHRoSWQiLCJPSURDIiwiaGlwIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiU0JYXzAwMjAzOSI6eyJyb2xlcyI6WyJ1bWFfcHJvdGVjdGlvbiJdfSwiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJvcGVuaWQgZW1haWwgcHJvZmlsZSIsImNsaWVudElkIjoiU0JYXzAwMjAzOSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiY2xpZW50SG9zdCI6IjEwLjIzMy42OS4yNTMiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJzZXJ2aWNlLWFjY291bnQtc2J4XzAwMjAzOSIsImNsaWVudEFkZHJlc3MiOiIxMC4yMzMuNjkuMjUzIn0.HUZvKBzCSkZgNPxfX8vEI5PvJsANAsKyx063SmAGgj0PqGIY8nS0dpCK57u3BQrlCuZ5jTyWgfPgLVjdC_QuZ__qEfhfr4CQCU6keWBIIRE2_2PEuY7a5jRbC1px6u2-qfSdwaG5dDZhsvi6omglgtdkvIu4rwaZgc2PyVGfoQRPh3nRre1ifaYNtTFKKPVZKvNWaMsddQPWIA8kug9vGV-AU4GD4X1bJNZAE3Uu1Rp5NaOqrFD-DNkE6oT1sljBoEKO_V1LS_7dpJRSxgQPdwB5AwXwd2_Ff2UysuGFkAmFKTZ_62iaYZiQ716gLkTFmA9YnADDKOI44dOnL9ZzCA";
		String auth="Authorization";
		String id="X-CM-ID";
		String idValue="sbx";
		WebClient client = WebClient.builder()
				  .baseUrl("https://dev.abdm.gov.in/")
				  .defaultHeaders( httpHeaders -> {
					  httpHeaders.set(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE);
			          httpHeaders.set(id, idValue);
			          httpHeaders.set(auth, token);})
				     .build();
		return client;
	}
	
	public static void main(String[] args) {
		SpringApplication.run(HadApplication.class, args);
	}

}
