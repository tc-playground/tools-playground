const INIT_MISSILES: i32 = 8;
const INIT_SALVO: i32 = 2;

fn main() {
    let mut missiles = INIT_MISSILES;
    let salvo = INIT_SALVO;
    println!("Firing {} of my {} missiles...", salvo, missiles);
    missiles = missiles - salvo;
    println!("{} missiles left", missiles);
}
