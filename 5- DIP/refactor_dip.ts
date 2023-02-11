class UserController {
  constructor(private userService: UserService) {}

  getUser(id: string) {
    return this.userService.getUser(id);
  }
}

class UserService {
  constructor(private userRepository: UserRepository) {}

  getUser(id: string) {
    return this.userRepository.getUser(id);
  }
}

class UserRepository {
  getUser(id: string) {
    // go to the DDBB
  }
}

const userRepository = new UserRepository();
const userService = new UserService(userRepository);
const userController = new UserController(userService);
