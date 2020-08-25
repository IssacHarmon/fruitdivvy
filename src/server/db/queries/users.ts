import { Query } from '../'; 

const all = async () => Query('SELECT providers.name, providers.lat, providers.lng, users_fruits.* FROM providers JOIN users_fruits on providers.id=users_fruits.userid');
const one = () => Query('', []);
// set? is shorthand to take an object and insert into database vs individual arguments (column : value pairs)
// splits in half for you and puts into table based on object structure.
const insert = (newUser: any) => Query('INSERT INTO providers SET?', newUser);
const update = () => Query('', []);
const destroy = () => Query('', []);

export default {
all, 
one, 
insert,
update,
destroy
}

