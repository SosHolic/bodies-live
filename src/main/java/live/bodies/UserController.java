package live.bodies;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class UserController {

    List<Gps> positions = new ArrayList<>();

    @GetMapping("/user/add")
    void addUser(@RequestParam double longtitude, @RequestParam double langtitude) {
        positions.add(
                new Gps().setLangtitude(langtitude)
                        .setLongtitude(longtitude)
        );
    }

    @GetMapping("/user/getAll")
    List<Gps> getAllUsers(){
        return positions;
    }
}


