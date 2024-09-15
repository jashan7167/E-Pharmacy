package backendminor;


import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;

// @Configuration
public class BasicAuthenticationSecurity {

    //Customising the Filterchain
    //authentocate all requests
    //basic authentication
    //disabling csrf
    //stateless rest api
    @Bean
    public SecurityFilterChain filterChainSecurity(HttpSecurity http) throws Exception {
        http.authorizeHttpRequests(auth->
                          auth
                        .antMatchers(HttpMethod.OPTIONS, "/**").permitAll().
                        anyRequest().authenticated());

        http.httpBasic(Customizer.withDefaults());

        //whenever you disable csrf the session has to be stateless
        http.sessionManagement(
                session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS)
        );



        http.csrf().disable();

        return http.build();
    }
}
