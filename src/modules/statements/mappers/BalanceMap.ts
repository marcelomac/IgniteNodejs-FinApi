import { Statement } from "../entities/Statement";

export class BalanceMap {
  static toDTO({
    statement,
    balance,
  }: {
    statement: Statement[];
    balance: number;
  }) {
    const parsedStatement = statement.map(
      ({
        id,
        user_id,
        sender_id,
        recipient_id,
        amount,
        description,
        type,
        created_at,
        updated_at,
      }) => {
        if (type === "transfer") {
          if (recipient_id) {
            //Idrecipient_id.toString().trim() != '')


            CORRIGIR sender_id x recipient_id no GetBalance

            return {
              id,
              sender_id: user_id,
              amount: Number(amount),
              description,
              type,
              created_at,
              updated_at,
            };
          } else {
            return {
              id,
              recipient_id: user_id,
              amount: Number(amount),
              description,
              type,
              created_at,
              updated_at,
            };
          }
        }

        return {
          id,
          amount: Number(amount),
          description,
          type,
          created_at,
          updated_at,
        };
      }
    );

    return {
      statement: parsedStatement,
      balance: Number(balance),
    };
  }
}
