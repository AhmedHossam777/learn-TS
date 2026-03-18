interface model {
    create(): string

    getOne(): string

    getAll(): string[]

    delete(): void

    update(): string

    ///
}

class CRUDFactory<T extends model> {
    constructor(private readonly model: T) {
    }


    createOne() {
        return this.model.create()
    }

    getOne() {
        return this.model.getOne()
    }

    update() {
        return this.model.update()
    }

    getAll() {
        return this.model.getAll()
    }

    delete() {
        return this.model.delete()
    }
}

// Usermodel
interface UserModel extends model {
}

interface PostModel extends model {
}



// User -> CRUDFactory -> crud method user
const userModel: UserModel = {
    delete() {
    },
    create() {
        return ''
    },
    getAll() {
        return ['', '']
    },
    getOne() {
        return ''
    },
    update() {
        return ''
    }
}
const posModel: PostModel = {
    delete() {
    },
    create() {
        return ''
    },
    getAll() {
        return ['', '']
    },
    getOne() {
        return ''
    },
    update() {
        return ''
    }
}

class UserService extends CRUDFactory<UserModel> {
    override createOne(): string {
        // validate password and email
        // creation
        return ''
    }
}
const userService = new UserService(userModel)

class PostService extends CRUDFactory<PostModel> {
}
const postService = new PostService(posModel)

userService.createOne()
userService.getOne()
userService.getAll()


postService.update()
postService.getAll()
postService.delete()