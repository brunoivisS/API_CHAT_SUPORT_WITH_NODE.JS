import { EntityRepository, Repository } from "typeorm"
import { User} from "../entities/User"


@EntityRepository(User)
class UsersRepository extends Repository<User> {

}
///fjhggyuduiff

export { UsersRepository };