import express from 'express'
import { beansService } from '#services/beansService'
import { dataTypes, type beanType } from '#types/index';
import { createData } from '#modules/utils';

export const beansRouter = express.Router()

beansRouter.get('/', async (req, res) => {
    const allbeans = await beansService.getBeans()

    const statusCode = allbeans.type === dataTypes.ERROR ? 400 : 200

    const parsedResponse = beansService.parseBeans(allbeans.data as beanType[])

    res.status(statusCode).json(createData(dataTypes.SUCCESS, parsedResponse))
});


beansRouter.get('/:id', async (req, res) => {
    const id = req.params.id

    const response = await beansService.getBeans()

    if(response.type === dataTypes.ERROR) {
        res.status(400).json(response)

        return
    }
    
    const bean = (response.data as beanType[]).find(item => item.id === id)
    
    if(bean){
         res.status(200).json(createData(dataTypes.SUCCESS, bean))
    } else {
         res.status(400).json(createData(dataTypes.ERROR, `Bean with id - ${id} not found`))
    }
});