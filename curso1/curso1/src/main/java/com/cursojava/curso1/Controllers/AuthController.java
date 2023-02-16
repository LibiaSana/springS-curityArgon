package com.cursojava.curso1.Controllers;

import com.cursojava.curso1.dao.UsuarioDao;
import com.cursojava.curso1.models.Usuario;
import com.cursojava.curso1.utils.JWTUtil;
import io.jsonwebtoken.MalformedJwtException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthController {

    @Autowired
    UsuarioDao usuarioDao;

    @Autowired
    private JWTUtil jwtUtil;

    @RequestMapping(value = "api/login", method = RequestMethod.POST)
    public String login(@RequestBody Usuario usuario) throws MalformedJwtException {
        Usuario usuarioLogueado = usuarioDao.obtenerUsuarioPorCredenciales(usuario);
        if (usuarioLogueado != null) {
            return jwtUtil.create(String.valueOf(usuarioLogueado.getId()), usuarioLogueado.getEmail());
        }
        return "FAIL";
    }
}
