import Message from "./Message";
import Terminal from "./Terminal";
import {
  InsertableDatabase,
  GetableDatabase,
  RemoveableDatabase,
  UpdatableDatabaseValue,
  FindableDatabaseValue,
} from "./types";
import { PrismaClient, type Prisma } from "@prisma/client";
import prisma from "@database";

type ModelNames = Prisma.ModelName;

type Models = {
  [M in ModelNames]: Exclude<
    Awaited<ReturnType<PrismaClient[Uncapitalize<M>]["findFirst"]>>,
    null
  >;
};

type ModelCreateInput = {
  [M in ModelNames]: Parameters<
    PrismaClient[Uncapitalize<M>]["create"]
  >[0]["data"];
};

type ModelUpdateInput = {
  [M in ModelNames]: Parameters<
    PrismaClient[Uncapitalize<M>]["update"]
  >[0]["data"];
};

/**
 * Classe que representa um conjunto de operações de banco de dados que podem ser realizadas em uma entidade.
 */
export default class Citi<Entity extends ModelNames> {
  constructor(readonly entity: Entity) {}
  /**
   * Verifica se algum dos elementos fornecidos está indefinido.
   *
   * @param {...string[]} elements - Elementos a serem verificados.
   * @returns {boolean} Retorna verdadeiro se algum dos elementos estiver indefinido, caso contrário, retorna falso.
   */
  areValuesUndefined(...elements: string[]): boolean {
    const isAnyUndefined = elements.some((element) => {
      return element === undefined;
    });
    return isAnyUndefined;
  }

  /**
   * @description Insere um objeto no banco de dados.
   * Não sabe o que inserir? Teste chamando a função com
   * insertIntoDatabase({}) e
   * clicando em ctrl+espaço dentro do objeto no parâmetro!
   * @param {ModelCreateInput[Entity]} object O dado a ser inserido.
   * @returns {InsertableDatabase} O httpStatus e uma message.
   * @example
   * const citi = new Citi("User")
   * await citi.insertIntoDatabase({firstName: "Mário", lastName: "Mota", age: 20})
   */
  async insertIntoDatabase<T extends ModelCreateInput[Entity]>(
    object: T
  ): Promise<InsertableDatabase> {
    try {
      console.log(object, this.entity.toLowerCase());
      await prisma[
        this.entity.toLowerCase() as Uncapitalize<Prisma.ModelName>
        //@ts-expect-error
      ].create({
        data: object,
      });
      Terminal.show(Message.INSERTED_IN_DATABASE);
      return {
        httpStatus: 201,
        message: Message.INSERTED_IN_DATABASE,
      };
    } catch (error) {
      Terminal.show(Message.ERROR_INSERTING_DATABASE);
      return {
        httpStatus: 400,
        message: Message.ERROR_INSERTING_DATABASE,
      };
    }
  }

  /**
   * Obtém todos os registros da entidade do banco de dados.
   *
   * @returns {Promise<GetableDatabase<Models[Entity]>>} Uma promessa que resolve para um objeto contendo o status HTTP e os valores recuperados.
   */
  async getAll(): Promise<GetableDatabase<Models[Entity]>> {
    try {
      const values = await prisma[
        this.entity.toLowerCase() as Uncapitalize<Prisma.ModelName>
        //@ts-expect-error
      ].findMany<Models[Entity]>();
      Terminal.show(Message.GET_ALL_VALUES_FROM_DATABASE);
      return {
        httpStatus: 200,
        values,
      };
    } catch (error) {
      Terminal.show(Message.ERROR_GETTING_VALUES_FROM_DATABASE);
      return {
        httpStatus: 400,
        values: [],
      };
    }
  }

  /**
   * Procura um registro por ID na entidade do banco de dados.
   *
   * @param {string | number} id - O ID do registro a ser encontrado.
   * @returns {Promise<FindableDatabaseValue<Models[Entity]>>} Uma promessa que resolve para um objeto contendo o status HTTP e o valor encontrado, se existir.
   */
  async findById(
    id: string | number
  ): Promise<FindableDatabaseValue<Models[Entity]>> {
    try {
      const value = await prisma[
        this.entity.toLowerCase() as Uncapitalize<Prisma.ModelName>
        //@ts-expect-error
      ].findFirst({
        where: {
          id: Number(id),
        },
      });
      Terminal.show(Message.VALUE_WAS_FOUND);
      return {
        httpStatus: 200,
        value,
      };
    } catch (error) {
      Terminal.show(Message.VALUE_WAS_NOT_FOUND);
      return {
        httpStatus: 400,
        value: undefined,
      };
    }
  }

  /**
   * Atualiza um registro na entidade do banco de dados com os valores fornecidos.
   *
   * @param {string | number} id - O ID do registro a ser atualizado.
   * @param {T} object - O objeto contendo os valores a serem atualizados.
   * @returns {Promise<UpdatableDatabaseValue>} Uma promessa que resolve para um objeto contendo o status HTTP e uma mensagem indicando o resultado da operação de atualização.
   */
  async updateValue<T extends ModelUpdateInput[Entity]>(
    id: string | number,
    object: T
  ): Promise<UpdatableDatabaseValue> {
    try {
      const valueExists = await this.findById(id);
      if (!valueExists.value)
        return {
          httpStatus: 400,
          messageFromUpdate: Message.VALUE_WAS_NOT_FOUND,
        };

      await prisma[
        this.entity.toLowerCase() as Uncapitalize<Prisma.ModelName>
        //@ts-expect-error
      ].update({
        where: {
          id: Number(id),
        },
        data: object,
      });

      Terminal.show(Message.VALUE_WAS_UPDATED);
      return {
        httpStatus: 200,
        messageFromUpdate: Message.VALUE_WAS_UPDATED,
      };
    } catch (error) {
      Terminal.show(Message.ERROR_AT_UPDATE_FROM_DATABASE);
      return {
        httpStatus: 400,
        messageFromUpdate: Message.ERROR_AT_UPDATE_FROM_DATABASE,
      };
    }
  }

  /**
   * Deleta um registro por ID na entidade do banco de dados.
   *
   * @param {string | number} id - O ID do registro a ser deletado.
   * @returns {Promise<RemoveableDatabase>} Uma promessa que resolve para um objeto contendo o status HTTP e uma mensagem indicando o resultado da operação de exclusão.
   */
  async deleteValue(id: string | number): Promise<RemoveableDatabase> {
    try {
      await prisma[
        this.entity.toLowerCase() as Uncapitalize<Prisma.ModelName>
        //@ts-expect-error
      ].delete({
        where: {
          id: Number(id),
        },
      });
      Terminal.show(Message.VALUE_DELETED_FROM_DATABASE);
      return {
        httpStatus: 200,
        messageFromDelete: Message.VALUE_DELETED_FROM_DATABASE,
      };
    } catch (error) {
      Terminal.show(Message.ERROR_AT_DELETE_FROM_DATABASE);
      return {
        httpStatus: 400,
        messageFromDelete: Message.ERROR_AT_DELETE_FROM_DATABASE,
      };
    }
  }
}
