<?php

declare(strict_types=1);


namespace App\ValueObject;


class Player
{
    public function __construct(private int $hp)
    {
    }

    public function getHp(): int
    {
        return $this->hp;
    }

    public function takeDmg(int $dmg): void
    {
        $this->hp -= $dmg;
    }
    public function setHp(int $hp): void
    {
        $this->hp = $hp;
    }
    public function addHP(int $hp): void{
        $this->hp += $hp;
    }
}
