import "reflect-metadata";
import { container } from "tsyringe";
import { CourseRepository } from "../../repository/CourseRepository";
import { ListCoursesUseCase } from "../use-cases/ListCourses.use-case";

//Inicialização do container de injeção.

export function configureCourseContainer(strapi) {
  container.register('database', { useValue: strapi })
  container.register(CourseRepository, {
    useFactory: () => new CourseRepository(container.resolve('database'))
  })
  container.register(ListCoursesUseCase, ({
    useFactory: () => new ListCoursesUseCase(container.resolve(CourseRepository))
  }))
}