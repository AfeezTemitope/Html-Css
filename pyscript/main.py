# from pyweb import pydom
#
# class Calculator:
#     pass
from dataclasses import dataclass


@dataclass
class InventoryItem:
    name: str
    unit_price: 2
    quantity_on_hand: int = 4

    def total_cost(self) -> float:
        return self.unit_price * self.quantity_on_hand
