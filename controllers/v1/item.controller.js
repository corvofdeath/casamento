import Item from '../../models/item.model';

export default class ItemController {

    constructor() {
    }

    async create(ctx) {

        try {
            
            if (!Array.isArray(ctx.request.body)) {
                ctx.request.body = [ctx.request.body];
            }

            const result = await Item.insertMany(ctx.request.body);

            return ctx.body = result;

        } catch (error) {
            console.error(error);
            return context.throw(400, error);
        }
    }

    async get(ctx) {

        try {
            const result = await Item.find();

            return ctx.body = result;
        } catch (error) {
            console.error(error);
            return context.throw(400, error);
        }
    }

    async update(ctx) {
        try {
            const id = ctx.params.id;

            const result = await Item.update({ _id: id }, ctx.request.body);

            return ctx.body = result;
        } catch (error) {
            console.error(error);
            return context.throw(400, error);
        }
    }

    async gift(ctx) {
        try {
            const id = ctx.params.id;
            const item = await Item.findOne({ _id: id });

            if (!item) {
                return context.throw(400, "Item not found");
            }

            const result = await Item.update({ _id: id }, { gifted: !item.gifted });

            return ctx.body = !item.gifted;
        } catch (error) {
            console.error(error);
            return context.throw(400, error);
        }
    }
}