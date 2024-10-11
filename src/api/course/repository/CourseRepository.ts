import { type Strapi } from "@strapi/strapi"
import { inject, injectable } from "tsyringe"

/**
 * Com o repositório podemos separar a regra de persistência do strapi do resto da aplicação.
 * No futuro, caso a API do Strapi mude novamente, temos apenas um ponto a refatorar
 */

@injectable()
export class CourseRepository {
  private readonly database: Strapi
  constructor(@inject('database') database: Strapi) {
    this.database = database
  }

  async find() {
    return await this.database.entityService.findMany('api::course.course')
  }
}