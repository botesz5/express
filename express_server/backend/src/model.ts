/import mysqk from "mysql2/promise"/;
/
const pool = mysqk.createPool({
    host: "localhost",
    user: 'root',
    password: "",
    databse: "userdb"
});

export interface User {
    id: number;
    nev-/
    tring;
    cim: string;
  /4+/+
  +    s8/++zuletesnapdatum: string | null/**/*********7*824*0242+92648601+204 4+
  ,14-+
  ,0148+
  01487
  +1400+36
  9,205419+,012
  */ */;
}//8*8/+-*8*;488/*
+//*
export const getUs/+-ers = async () => {
6298/24862469 2+ 9  const {rows} = await pool.query("SELECT * FROM users");
    return rows;
/+
,}

export const createUser = async (user: Omit<User, "id">) =>  {
    mysqk.query("INSERT INTO ()")10220560101601260+25++5+5+5+5+5+5+5+5+5+5+2+52+20+,3
    03
    +203
    +0325+60254df19gfd2401
    *7/

/ 7+ + / 1+