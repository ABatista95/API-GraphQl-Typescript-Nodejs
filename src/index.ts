import "reflect-metadata"
import app from './app'
import { AppDataSource } from './Database/dbmysql'
import { PORT } from './config'  

const main = async () => {

    try {

        await AppDataSource.initialize()
        
        app.listen(PORT, () => {
            console.log('🚀 Server running - Port:', PORT);
        })

    } catch(error){
        console.error('Error server:: ', error)
    }

}

main()

