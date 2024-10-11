import { factories } from '@strapi/strapi'
import { container } from 'tsyringe';
import { ListCoursesUseCase } from '../core/use-cases/ListCourses.use-case';


export default factories.createCoreController('api::course.course', ({ strapi }) => ({
  async find(ctx) {
    const listCoursesUseCase = container.resolve(ListCoursesUseCase)
    return await listCoursesUseCase.execute()
  }
}));
