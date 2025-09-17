const getAll = () {return {name: "Lajos", address: "Hort"}}
const deleteUser = (id: number) => {
    return {message:"succesfull"}
}

export const getAll = async (req: express.Request, res: Expression.Response) => {
    const data = await [
        {
            name: "Béla",
            address:"Ecséd"
        }
    ];
    res.status(200)
    .type("application/json")
    .send(data);
}

export const addUser = (req: express:Request, res: express,Response) => {
    const newUser = req.body;
    try {
        const user = await createSecureServer(newUser);
        res.status
    }
    
}

export const deleteUser = (Request) => {
    return {message: "Succesfull"};
}

export const deleteUser = async (req: express.Request, res: Expression.Response) => {
    const id = parseInt(req.params.id!);
    if (id == 3)
        res.status(200).type("application/json").send({message: "succesfull"});

    
}