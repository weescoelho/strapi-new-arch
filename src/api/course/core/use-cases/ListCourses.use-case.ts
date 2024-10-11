import { inject, injectable } from "tsyringe";
import { CourseRepository } from "../../repository/CourseRepository";

/**
 * Separando os use-cases da aplicação temos um controle mais granular. Facilitando os testes
 * Nada impede do uso de serviços como agregadores de casos de uso.
 */

@injectable()
export class ListCoursesUseCase {
  constructor(@inject(CourseRepository) private readonly courseRepository: CourseRepository) {
  }
  async execute() {
    return await this.courseRepository.find()
  }
}