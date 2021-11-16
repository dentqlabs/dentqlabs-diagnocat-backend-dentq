
const {tbl_branches, 
    tbl_doctors, 
    tbl_appointments, 
    tbl_appointments_statuses,
    tbl_shared_appointments2doctors,
    tbl_users,
    user_roles,
    users_to_roles,
    decode} = require('../utils/database');
const Sequelize = require('sequelize');

const getUsers = async (req, res, next) =>{
    try{
        const {role_key} = req.query;

        const query = {
            attributes:[
                'user_id',	        		
                [Sequelize.col('tbl_user.username'), 'username'],
                [Sequelize.col('tbl_user.full_name'), 'full_name'],
                [Sequelize.col('user_role.role_Key'), 'role_key']
            ],
            include: [
                {
                    model: tbl_users,
                    attributes: [],
                    nested: false,
                    required: true,            
                },
                {
                
                    model: user_roles,
                    attributes: [],
                    nested: false,
                    required: true,            
                    
                }
            ],
            where: {},
            raw: true,        
            subQuery:false,
        }

        if (role_key){
            query.where['$user_role.role_key$'] = role_key;
        }
        const users = await users_to_roles.findAll(query,);
        res.json({data: users}).end();
    }catch(error){
        console.error(error);
        res.status(500).end();
    }
}

module.exports = {
    getUsers
}